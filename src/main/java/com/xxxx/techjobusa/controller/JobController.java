package com.xxxx.techjobusa.controller;

import com.xxxx.techjobusa.entity.Job;
import com.xxxx.techjobusa.repository.JobRepository;
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
//@RequestMapping("/")
public class JobController {
    @Autowired
    private JobRepository jobRepository;

    @GetMapping("/")
    public List<Job> getJobs() {
        List<Job> jobs = (List<Job>) jobRepository.findAll();
        System.out.println(jobs);
        return jobs;
    }

    @GetMapping("/search")
    public List<Job> searchJobs(@RequestParam("what") String keyWord,
                                @RequestParam("where") String desiredLocation,
                                @RequestParam("number_of_results") @DefaultValue("10") int numberOfResults) {
        List<Job> jobs = jobRepository.findByTitleContainingIgnoreCaseAndLocationIgnoreCase(keyWord, desiredLocation);
        return jobs;
    }
}
