package com.project.urlshortener.entity;


import jakarta.persistence.*;
import lombok.Data;
import java.time.Instant;


@Entity
@Data
@Table(name = "url_mapping")
public class LinkMapping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "short_url", nullable = false, unique = true)
    private String shortUrl;

    @Column(name = "long_url", nullable = false, columnDefinition = "TEXT")
    private String longUrl;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt;
    @Column
    private Instant expiresAt;

    @PrePersist
    public void prePersist() {
        this.createdAt = Instant.now();
    }
}
