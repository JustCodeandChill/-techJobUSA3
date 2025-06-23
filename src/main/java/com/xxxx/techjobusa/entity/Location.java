package com.xxxx.techjobusa.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "Locations")
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "lattitude", nullable = true)
    private String lattitude;
    @Column(name = "longitude", nullable = true)
    private String longitude;
    @Column(name = "countryState", nullable = true)
    private String countryState;
    @Column(name = "city", nullable = true)
    private String city;
    @Column(name = "zipCode", nullable = true)
    private String zipCode;

    @OneToMany(mappedBy = "location")
    private List<Job> jobs;
}
