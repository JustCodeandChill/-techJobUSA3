package com.xxxx.techjobusa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class TechjobUsaApplication {

    public static void main(String[] args) {
        SpringApplication.run(TechjobUsaApplication.class, args);
    }

}
