package com.xxxx.techjobusa.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class AdzunaLocation {
    private String display_name;
    private List<String> area;
}
