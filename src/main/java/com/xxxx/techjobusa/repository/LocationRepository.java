package com.xxxx.techjobusa.repository;

import com.xxxx.techjobusa.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LocationRepository extends JpaRepository<Location, Long> {

    List<Location> findByCountryStateContainsIgnoreCase(String desiredLocation);
}
