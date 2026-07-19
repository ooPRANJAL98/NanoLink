package com.project.urlshortener.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Username" , nullable= false , unique = true)
    private String username;

    @Column(name = "Password" , nullable = false)
    private String password;

    @Column(name = "Email" , nullable = false)
    private String email;


}
