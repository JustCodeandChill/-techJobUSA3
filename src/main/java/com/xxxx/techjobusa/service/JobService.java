package com.xxxx.techjobusa.service;

import com.xxxx.techjobusa.entity.Job;
import com.xxxx.techjobusa.entity.Location;
import com.xxxx.techjobusa.model.JobResponse;
import com.xxxx.techjobusa.repository.JobRepository;
import com.xxxx.techjobusa.repository.LocationRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class JobService {
    private final JobRepository jobRepository;
    private final LocationRepository locationRepository;

    public JobService(JobRepository jobRepository, LocationRepository locationRepository) {
        this.jobRepository = jobRepository;
        this.locationRepository = locationRepository;
    }

    public List<JobResponse> findByTitleContainingIgnoreCaseAndLocationIgnoreCase(String keyWord, String desiredLocation) {
        List<Location> locations = locationRepository.findByCountryStateContainsIgnoreCase(desiredLocation);
        List<Long> locationIds = locations.stream().map(Location::getId).collect(Collectors.toList());
        log.info("locationIds = " + locationIds);
        List<Job> jobs = jobRepository.findByTitleContainingIgnoreCaseAndLocation_IdIn(keyWord, locationIds);
        System.out.println(jobs);
//        log.info(locations.toString());
        List<JobResponse> jobResponses = jobs.stream().map(JobService::convertToJobResponse).collect(Collectors.toList());
        return jobResponses;
    } //To change body of created methods use File | Settings | File Templates>

    private static JobResponse convertToJobResponse(Job job) {
        return JobResponse.builder()
                .id(job.getId())
                .title(job.getTitle())
                .description(job.getDescription())
                .companyName(job.getCompanyName())
                .contractType(job.getContractType())
                .applyUrl(job.getApplyUrl())
                .salary(job.getSalary())
                .build();
    }
}
