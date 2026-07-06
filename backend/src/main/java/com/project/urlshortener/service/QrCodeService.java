package com.project.urlshortener.service;


import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;
import java.io.ByteArrayOutputStream;
import java.util.HashMap;
import java.util.Map;

@Service
public class QrCodeService {

    @Value("${app.base-url:http://localhost:8080}")
    private String baseUrl;

    public byte[] generateQrCode(String shortCode) {

        try {

            String url = baseUrl + "/" + shortCode;

            Map<EncodeHintType, Object> hints = new HashMap<>();

            hints.put(EncodeHintType.MARGIN, 1);

            BitMatrix matrix = new MultiFormatWriter().encode(url, BarcodeFormat.QR_CODE, 300, 300, hints);

            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

            MatrixToImageWriter.writeToStream(matrix, "PNG", outputStream);

            return outputStream.toByteArray();

        } catch (Exception e) {

            throw new RuntimeException("Unable to generate QR Code", e);

        }
    }

}
