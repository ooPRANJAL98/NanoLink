package com.project.urlshortener.controller;


import com.google.zxing.BarcodeFormat;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.project.urlshortener.service.QrCodeService;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.io.ByteArrayOutputStream;
import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping("/api/qr")
@CrossOrigin(origins = "http://localhost:5173")
public class QrController {

    @Value("${app.base-url}")
    private String appBaseUrl;
    private final QrCodeService qrCodeService;

    public QrController(QrCodeService qrCodeService) {
        this.qrCodeService = qrCodeService;
    }

//    @GetMapping("/{shortCode}")
//    public ResponseEntity<byte[]> generateQrCode(@PathVariable String shortCode) {
//
//        byte[] image = qrCodeService.generateQrCode(shortCode);
//
//        return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"qr.png\"").cacheControl(CacheControl.maxAge(30, TimeUnit.MINUTES)).body(image);
//
//    }

    @GetMapping("/{code}")
    public ResponseEntity<byte[]> generateQr(@PathVariable String code) throws Exception {
        String shortUrl = appBaseUrl + "/" + code;
        QRCodeWriter writer = new QRCodeWriter();
        BitMatrix matrix = writer.encode(shortUrl, BarcodeFormat.QR_CODE, 300, 300);
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        MatrixToImageWriter.writeToStream(matrix, "PNG", out);
        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_PNG)
                .body(out.toByteArray());
    }
}
