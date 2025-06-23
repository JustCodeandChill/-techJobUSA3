package com.xxxx.techjobusa.repository;

import com.xxxx.techjobusa.entity.Job;
import com.xxxx.techjobusa.entity.Location;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.stream.Collectors;

public class TitleAndLocationSearchingStrategyImpl implements iTitleAndLocationSearchingStrategy {
    @Autowired
    private JobRepository jobRepository;
    @Autowired
    private LocationRepository locationRepository;

    @Override
    public List<Job> findByTitleContainingIgnoreCaseAndLocationIgnoreCase(String keyWord, String desiredLocation) {
    return null;
    }
}
