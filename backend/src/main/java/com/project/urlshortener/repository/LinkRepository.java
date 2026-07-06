package com.project.urlshortener.repository;

import com.project.urlshortener.entity.LinkMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LinkRepository extends JpaRepository<LinkMapping,Long> {

    Optional<LinkMapping> findByShortUrl(String shortUrl);
    boolean existsByShortUrl(String shortUrl);
}
