package com.project.urlshortener.service;

import com.project.urlshortener.entity.LinkMapping;
import com.project.urlshortener.repository.LinkRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class LinkServiceTest {

    @Mock
    LinkRepository repository;

    @Mock
    Base62Encoder encoder;

    @InjectMocks
    LinkService service;

    @Test
    void shouldCreateShortUrl() {
        LinkMapping map = new LinkMapping();
        map.setId(1L);

        when(repository.save(any())).thenReturn(map);

        when(encoder.encode(1L)).thenReturn("abc");

        String code = service.shorten("https://google.com" , "google1");

        assertEquals("google1", code);
    }
}
