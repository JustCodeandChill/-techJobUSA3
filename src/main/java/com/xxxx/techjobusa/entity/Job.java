package com.xxxx.techjobusa.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "Jobs")
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "title")
    private String title;
    @Column(name = "description")
    private String description;
    @Column(name = "company")
    private String companyName;
    @Column(name = "contractType", nullable = true)
    private String contractType;
    @Column(name = "applyUrl")
    private String applyUrl;
    @Column(name = "salaryMin")
    private String salary;
    @Column(name = "createdAt", nullable = true, updatable = false)
    private LocalDateTime createdAt;
    @Column(name = "insertedAt", nullable = true, updatable = false)
    private LocalDateTime insertedAt;
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    @JoinColumn(name = "location_id" ,nullable = false)
    @JoinColumn(name = "locationId", referencedColumnName = "id", nullable = true)
    private Location location;

    @Override
    public String toString() {
        return "Job{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", companyName='" + companyName + '\'' +
                ", contractType='" + contractType + '\'' +
                ", applyUrl='" + applyUrl + '\'' +
                ", salary='" + salary + '\'' +
                ", location=" +
                '}';
    }
}
