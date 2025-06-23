package com.xxxx.techjobusa.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Jobs")
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "title")
    private String title;
    @Column(name = "description")
    private String description;
    @Column(name = "company")
    private String companyName;
    @Column(name = "contract_type")
    private String contractType;
    @Column(name = "apply_url")
    private String applyUrl;
    @Column(name = "salary_min")
    private String salary;
    @Column(name = "location_id")
    private String location;

}
