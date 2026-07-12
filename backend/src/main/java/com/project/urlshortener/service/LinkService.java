package com.project.urlshortener.service;

import com.project.urlshortener.entity.LinkMapping;
import com.project.urlshortener.exception.AliasAlreadyExistsException;
import com.project.urlshortener.exception.NotFoundException;
import com.project.urlshortener.repository.LinkRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.util.InvalidUrlException;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class LinkService {

    private static final Logger logger = LoggerFactory.getLogger(LinkService.class);

    private final LinkRepository repository;
    private final Base62Encoder encoder;
    private final RedisTemplate<String, String> redisTemplate;

    private static final Duration CACHE_TTL = Duration.ofHours(24);

    @Autowired
    public LinkService(LinkRepository repository,
                       Base62Encoder encoder,
                       RedisTemplate<String, String> redisTemplate) {

        this.repository = repository;
        this.encoder = encoder;
        this.redisTemplate = redisTemplate;
    }

    /**
     * Create Short URL
     */
    public String shorten(String longUrl, String customAlias) {

        logger.info("Creating short URL for {}", longUrl);

        validateUrl(longUrl);

        LinkMapping map = new LinkMapping();
        map.setLongUrl(longUrl);

        // temporary unique value
        map.setShortUrl(UUID.randomUUID().toString());

        map = repository.save(map);

        String code;

        if (customAlias != null && !customAlias.isBlank()) {

            customAlias = customAlias.trim();

            if (repository.existsByShortUrl(customAlias)) {

                throw new AliasAlreadyExistsException(
                        "Alias already exists.",
                        generateSuggestions(customAlias)
                );
            }

            code = customAlias;

        } else {

            code = encoder.encode(map.getId());

        }

        map.setShortUrl(code);

        repository.save(map);

        logger.info("Short URL created successfully {}", code);

        return code;
    }
    /**
     * Resolve Short URL
     */
    public String resolve(String code) {

        logger.info("Resolving short URL: {}", code);

        String cacheKey = "url:" + code;

        // ============================================================
        // Check Redis
        // ============================================================

        String cachedUrl = redisTemplate.opsForValue().get(cacheKey);

        if (cachedUrl != null) {

            logger.info("Cache HIT for {}", code);

            return cachedUrl;
        }

        logger.info("Cache MISS for {}", code);

        // ============================================================
        // Query Database
        // ============================================================

        LinkMapping map = repository.findByShortUrl(code)
                .orElseThrow(() -> {
                    logger.error("Short URL not found: {}", code);
                    return new NotFoundException("Short URL not found.");
                });

        // ============================================================
        // Store in Redis
        // ============================================================

        redisTemplate.opsForValue().set(
                cacheKey,
                map.getLongUrl(),
                CACHE_TTL
        );

        logger.info("Stored {} in Redis for {} hours",
                code,
                CACHE_TTL.toHours());

        return map.getLongUrl();
    }

    /**
     * URL Validation
     */
    private void validateUrl(String url) {

        if (url == null || url.isBlank()) {
            throw new InvalidUrlException("URL must not be empty.");
        }

        if (!(url.startsWith("http://") || url.startsWith("https://"))) {
            throw new IllegalArgumentException("Invalid URL format.");
        }
    }


    private List<String> generateSuggestions(String alias) {

        List<String> suggestions = new ArrayList<>();

        int number = 1;

        while (suggestions.size() < 5) {

            String candidate = alias + number;

            if (!repository.existsByShortUrl(candidate)) {
                suggestions.add(candidate);
            }

            number++;
        }

        return suggestions;
    }
}
