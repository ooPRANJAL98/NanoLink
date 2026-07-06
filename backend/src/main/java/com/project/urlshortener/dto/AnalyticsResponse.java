package com.project.urlshortener.dto;

import lombok.Data;


@Data
public class AnalyticsResponse {
    private String shortCode;
    private long totalClicks;


    public AnalyticsResponse(String shortCode , long totalClicks) {
        this.shortCode = shortCode;
        this.totalClicks = totalClicks;
    }
    }
