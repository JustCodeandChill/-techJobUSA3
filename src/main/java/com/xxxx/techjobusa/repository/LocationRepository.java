package com.xxxx.techjobusa.repository;

import com.xxxx.techjobusa.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface LocationRepository extends JpaRepository<Location, Long> {

    List<Location> findByCountryStateContainsIgnoreCase(String desiredLocation);

    Optional<Location> findByLongitudeAndLattitude(String longitude, String latitude);

    Optional<Location> findByLongitudeAndLattitudeAndCountryState(String longitude, String lattitude, String countryState);
}
