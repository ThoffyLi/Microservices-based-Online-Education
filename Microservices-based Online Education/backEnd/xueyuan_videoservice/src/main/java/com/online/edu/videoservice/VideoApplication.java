package com.online.edu.videoservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;


/**
 * @author Thoffy
 * @date 2019/11/21 12:12
 */

@SpringBootApplication
@EnableEurekaClient
public class VideoApplication {

    public static void main(String[] args) {
            SpringApplication.run(VideoApplication.class, args);
    }
}
