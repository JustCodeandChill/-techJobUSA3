package com.xxxx.techjobusa.model;

import com.xxxx.techjobusa.entity.Job;
import lombok.Data;

import java.util.List;

@Data
public class AdzunaResponse {
    List<AdzunaJobStructure> results;
    private int count;
    private int mean;

}
