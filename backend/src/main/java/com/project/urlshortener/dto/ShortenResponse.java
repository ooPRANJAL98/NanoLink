package com.project.urlshortener.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ShortenResponse {

    private String originalUrl;
    private String shortUrl;
    private String shortCode;
}