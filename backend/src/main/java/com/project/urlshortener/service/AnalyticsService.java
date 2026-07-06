package com.project.urlshortener.service;


import com.project.urlshortener.dto.AnalyticsResponse;
import com.project.urlshortener.entity.ClickEvent;
import com.project.urlshortener.repository.ClickEventRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class AnalyticsService {


    private final ClickEventRepository repository;

    @Autowired
    public AnalyticsService(ClickEventRepository repository) {
        this.repository = repository;
    }
    @Async("analyticsExecutor")
    public void recordClickEvent(String shortCode, String userAgent, String ipAddress) {
        ClickEvent click = new ClickEvent();
        click.setShortCode(shortCode);
        click.setUserAgent(userAgent);
        click.setIpAddress(ipAddress);
        repository.save(click);

    }

    public AnalyticsResponse getStats(String shortCode) {
        long count = repository.findByShortCode(shortCode).size();
        return new AnalyticsResponse(shortCode, count);
    }
}