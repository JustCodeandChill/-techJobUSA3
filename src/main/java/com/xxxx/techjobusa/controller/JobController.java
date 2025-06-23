package com.xxxx.techjobusa.controller;

import com.xxxx.techjobusa.entity.Job;
import com.xxxx.techjobusa.model.JobResponse;
import com.xxxx.techjobusa.repository.JobRepository;
import com.xxxx.techjobusa.service.JobService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@Slf4j
//@RequestMapping("/")
public class JobController {
    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private JobService jobService;

    @GetMapping("/")
    public List<Job> getJobs() {
        List<Job> jobs = (List<Job>) jobRepository.findAll();
        System.out.println(jobs);
        return jobs;
    }

    @GetMapping("/search")
    public List<JobResponse> searchJobs(@RequestParam("what") String keyWord,
                                @RequestParam("where") String desiredLocation,
                                @RequestParam(value = "number_of_results", required = false, defaultValue = "10" ) int numberOfResults) {
        log.info("keyWord = " + keyWord + desiredLocation + numberOfResults);
        List<JobResponse> jobs = jobService.findByTitleContainingIgnoreCaseAndLocationIgnoreCase(keyWord, desiredLocation);
        return jobs;
    }
}
