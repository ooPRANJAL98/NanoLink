package com.project.urlshortener.service;

import org.springframework.stereotype.Component;

@Component
public class Base62Encoder {


    private static final String characterSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    private static final int base = characterSet.length();

    public String encode(long value) {

        StringBuilder sb = new StringBuilder();
        if (value == 0) {
            return "00000";
        }
        while (value > 0) {
            sb.append(characterSet.charAt((int) (value % base)));
            value /= base;
        }


        while (sb.length() < 5) {
            sb.append(characterSet.charAt((0)));
        }

        return sb.reverse().toString();
    }

    public String decode(String code) {
        long value = 0;
        for (char c : code.toCharArray()) {
            value = value * base + characterSet.indexOf(c);
        }

        return encode(value);

    }
}
