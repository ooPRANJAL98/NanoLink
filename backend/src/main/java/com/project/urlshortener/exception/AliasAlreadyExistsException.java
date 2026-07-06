package com.project.urlshortener.exception;

import java.util.List;

public class AliasAlreadyExistsException extends RuntimeException {
    private final List<String> suggestions;

    public AliasAlreadyExistsException(String message,List<String> suggestions) {
        super(message);
        this.suggestions = suggestions;
    }

    public List<String> getSuggestions() {
        return suggestions;
    }
}
