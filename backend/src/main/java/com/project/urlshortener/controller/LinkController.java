package com.project.urlshortener.controller;

import com.project.urlshortener.dto.AnalyticsResponse;
import com.project.urlshortener.dto.ShortenRequest;
import com.project.urlshortener.dto.ShortenResponse;
import com.project.urlshortener.service.AnalyticsService;
import com.project.urlshortener.service.LinkService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
public class LinkController {

    private final LinkService linkService;
    private final AnalyticsService analyticsService;

    public LinkController(LinkService linkService, AnalyticsService analyticsService) {
        this.linkService = linkService;
        this.analyticsService = analyticsService;
    }

    @Value("${app.base-url}")
    private String baseUrl;

    @PostMapping("/api/shorten")
    public ResponseEntity<ShortenResponse> shorten(@Valid @RequestBody ShortenRequest shortenRequest) {
        String code = linkService.shorten(shortenRequest.getUrl(), shortenRequest.getCustomAlias());
        String shortUrl = baseUrl + "/" + code;
        return ResponseEntity.ok(new ShortenResponse(shortenRequest.getUrl(), shortUrl, code));
    }


    @GetMapping("/{code}")
    public ResponseEntity<Void> redirect(@PathVariable String code, HttpServletRequest request) {
        String longUrl = linkService.resolve(code);
        analyticsService.recordClickEvent(code, request.getHeader("User-Agent"), request.getRemoteAddr());
        return ResponseEntity.status(HttpStatus.FOUND).location(URI.create(longUrl)).build();
    }

    @GetMapping("/api/analytics/{code}")
    public ResponseEntity<AnalyticsResponse> getStats(@PathVariable String code) {
        return ResponseEntity.ok(analyticsService.getStats(code));
    }

}
