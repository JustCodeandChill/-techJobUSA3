package com.xxxx.techjobusa.service;

import com.xxxx.techjobusa.api.AdzunaAPI;
import com.xxxx.techjobusa.entity.Job;
import com.xxxx.techjobusa.entity.Location;
import com.xxxx.techjobusa.model.AdzunaJobStructure;
import com.xxxx.techjobusa.model.AdzunaResponse;
import com.xxxx.techjobusa.model.JobResponse;
import com.xxxx.techjobusa.repository.JobRepository;
import com.xxxx.techjobusa.repository.LocationRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
public class JobService {
    private final JobRepository jobRepository;
    private final LocationRepository locationRepository;
    private final WebClient webClient;

    public JobService(JobRepository jobRepository, LocationRepository locationRepository, WebClient webClient) {
        this.jobRepository = jobRepository;
        this.locationRepository = locationRepository;
        this.webClient = webClient;
    }

    public List<JobResponse> findByTitleContainingIgnoreCaseAndLocationIgnoreCase(String keyWord, String desiredLocation) {
        List<Location> locations = locationRepository.findByCountryStateContainsIgnoreCase(desiredLocation);
        List<Long> locationIds = locations.stream().map(Location::getId).collect(Collectors.toList());
        List<Job> jobs = jobRepository.findByTitleContainingIgnoreCaseAndLocation_IdIn(keyWord, locationIds);
        List<JobResponse> jobResponses = jobs.stream().map(JobService::convertToJobResponse).collect(Collectors.toList());
        return jobResponses;
    }

    public List<Job> getJobsFromApi(String  country, String currentPage, String resultsPerPage, String what, String where) {
        String url = AdzunaAPI.builder().
                country(country).
                currentPage(currentPage).
                resultsPerPage(resultsPerPage).
                // title
                what(what).
                // city
                where(where).
                build().getUrl();
        log.info("url = " + url);
        AdzunaResponse res =  webClient.get()
                .uri(url)
                .retrieve()
                .bodyToMono(AdzunaResponse.class)
                .block();
        log.info("res = " + res.getResults());
        List<AdzunaJobStructure> jobResponses = res.getResults();
        List<Job> jobs = jobResponses.stream().map(this::convertToJob).toList();
        jobRepository.saveAll(jobs);
        return jobs;
    }

    private Job convertToJob(AdzunaJobStructure adzunaJobStructure) {
        Job job = new Job();
        job.setTitle(adzunaJobStructure.getTitle());
        job.setDescription(adzunaJobStructure.getDescription());
        job.setCompanyName(adzunaJobStructure.getCompany().getDisplayName());
        job.setContractType(adzunaJobStructure.getContractType());
        job.setApplyUrl(adzunaJobStructure.getRedirectUrl());
        job.setSalary(adzunaJobStructure.getSalaryMin().toString());

        String longitude = Optional.ofNullable(adzunaJobStructure.getLongitude())
                .map(Object::toString)
                .orElse("");
        String lattitude = Optional.ofNullable(adzunaJobStructure.getLatitude())
                .map(Object::toString)
                .orElse("");
        String countryState = adzunaJobStructure.getLocation().getArea().get(1);

        Optional<Location> existing = locationRepository
                .findByLongitudeAndLattitudeAndCountryState(longitude, lattitude, countryState);

        Location location = new Location();
        if (existing.isPresent()) {
            location = existing.get();
        } else {
            if (adzunaJobStructure.getLatitude() != null) {
                location.setLattitude(adzunaJobStructure.getLatitude().toString());
            }
            if (adzunaJobStructure.getLongitude() != null) {
                location.setLongitude(adzunaJobStructure.getLongitude().toString());
            }

            if (adzunaJobStructure.getLocation() != null && adzunaJobStructure.getLocation().getArea() != null) {
                List<String> area = adzunaJobStructure.getLocation().getArea();
                if (area.size() > 1) {
                    location.setCountryState(area.get(1));
                }
                if (area.size() > 2) {
                    location.setCity(area.get(2));
                }
            }

            locationRepository.save(location);
        }

        job.setLocation(location);
        return job;
    }


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
