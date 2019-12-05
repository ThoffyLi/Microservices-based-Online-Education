package com.online.edu.eduservice;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;


/**
 * @author Thoffy
 * @date 2019/11/4 18:27
 */

@SpringBootApplication
@EnableEurekaClient
@EnableFeignClients // 发现注册中心里其他服务
public class EduServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(EduServiceApplication.class, args);
    }
}
