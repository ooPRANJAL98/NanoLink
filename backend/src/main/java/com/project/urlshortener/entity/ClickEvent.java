package com.project.urlshortener.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.Instant;


@Entity
@Data
@Table(name = "click_event")
public class ClickEvent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "short_code" , nullable = false)
    private String shortCode;

    @Column(name = "clicked_at", nullable = false)
    private Instant clickedAT = Instant.now();

    @Column(name = "ip_address")
    private String ipAddress;

    @Column(name="user_agent" , columnDefinition = "TEXT")
    private String userAgent;

    @Column(name = "country", length = 2)
    private String country;

}
