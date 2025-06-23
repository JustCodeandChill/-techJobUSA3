package com.xxxx.techjobusa.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class JobResponse {
    private Long id;
    private String title;
    private String description;
    private String companyName;
    private String contractType;
    private String applyUrl;
    private String salary;
}
