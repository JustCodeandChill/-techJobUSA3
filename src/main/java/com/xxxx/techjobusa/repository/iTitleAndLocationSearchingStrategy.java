package com.xxxx.techjobusa.repository;

import com.xxxx.techjobusa.entity.Job;

import java.util.List;

public interface iTitleAndLocationSearchingStrategy {
    List<Job> findByTitleContainingIgnoreCaseAndLocationIgnoreCase(String keyWord, String desiredLocation);
}
