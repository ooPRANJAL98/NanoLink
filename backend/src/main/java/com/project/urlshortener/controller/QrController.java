package com.project.urlshortener.controller;


import com.project.urlshortener.service.QrCodeService;

import org.springframework.http.CacheControl;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping("/api/qr")
@CrossOrigin(origins = "http://localhost:5173")
public class QrController {
    private final QrCodeService qrCodeService;

    public QrController(QrCodeService qrCodeService) {
        this.qrCodeService = qrCodeService;
    }

    @GetMapping("/{shortCode}")
    public ResponseEntity<byte[]> generateQrCode(@PathVariable String shortCode) {

        byte[] image = qrCodeService.generateQrCode(shortCode);

        return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"qr.png\"").cacheControl(CacheControl.maxAge(30, TimeUnit.MINUTES)).body(image);

    }
}
