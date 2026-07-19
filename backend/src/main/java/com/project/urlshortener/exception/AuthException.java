package com.project.urlshortener.exception;

public class AuthException extends RuntimeException {
    public AuthException(String message) {
        super(message);
    }
}