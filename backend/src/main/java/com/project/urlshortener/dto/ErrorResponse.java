package com.project.urlshortener.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ErrorResponse {

    private Instant timestamp = Instant.now();

    private int status;

    private String message;

    private List<String> suggestions;

    public ErrorResponse(int status, String message) {
        this.timestamp = Instant.now();
        this.status = status;
        this.message = message;
    }

    public ErrorResponse(int status, String message, List<String> suggestions) {
        this.timestamp = Instant.now();
        this.status = status;
        this.message = message;
        this.suggestions = suggestions;
    }
}