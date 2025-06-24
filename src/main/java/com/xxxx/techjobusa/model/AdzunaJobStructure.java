package com.xxxx.techjobusa.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class AdzunaJobStructure {
    private String id;

    @JsonProperty("salary_min")
    private Double salaryMin;

    @JsonProperty("salary_max")
    private Double salaryMax;

    private String title;

    private String description;

    @JsonProperty("redirect_url")
    private String redirectUrl;

    @JsonProperty("contract_time")
    private String contractType;

    @JsonProperty("salary_is_predicted")
    private String salaryIsPredicted;

    private Double latitude;
    private Double longitude;

    private String adref;
    private LocalDateTime created;

    private Company company;
    private Category category;
    private Location location;

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Company {
        @JsonProperty("display_name")
        private String displayName;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Category {
        private String tag;
        private String label;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Location {
        private String display_name;
        private List<String> area;
    }
}

