package com.xxxx.techjobusa.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.xxxx.techjobusa.entity.Location;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
public class JobResponse {
    private Long id;
    private String title;
    private String description;
    @JsonProperty("contract_time")
    private String contractType;
    @JsonProperty("redirect_url")
    private String applyUrl;
    @JsonProperty("salary_min")
    private String salary;
    private String companyName;
    @JsonIgnore
    private Company company;  // keep it just for deserialization
    @JsonProperty("created_at")
    private LocalDateTime createdAt;
    private Location location;

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Company {
        @JsonProperty("display_name")
        private String displayName;
    }

    @JsonProperty("company")
    public void unpackCompany(Company company) {
        this.company = company;
        this.companyName = company != null ? company.getDisplayName() : null;
    }
}
