package com.xxxx.techjobusa.repository;

import com.xxxx.techjobusa.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobRepository extends CrudRepository<Job, Long> {

    List<Job> findByTitleContainingIgnoreCaseAndLocation_IdIn(String keyword, List<Long> locationIds);
}
