package com.project.urlshortener.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;


@Data
public class ShortenRequest {

    @NotBlank(message = "URL must not be blank!")
    private String url;

    private String customAlias;

}