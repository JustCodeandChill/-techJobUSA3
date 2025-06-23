package com.xxxx.techjobusa.entity;

import jakarta.persistence.*;
import lombok.Data;

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
    @Column(name = "contractType")
    private String contractType;
    @Column(name = "applyUrl")
    private String applyUrl;
    @Column(name = "salaryMin")
    private String salary;
    @ManyToOne
//    @JoinColumn(name = "location_id" ,nullable = false)
    @JoinColumn(name = "locationId", referencedColumnName = "id")
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
