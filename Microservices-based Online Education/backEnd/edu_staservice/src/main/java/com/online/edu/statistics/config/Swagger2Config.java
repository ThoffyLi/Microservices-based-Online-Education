package com.online.edu.statistics.config;

/**
 * @author Thoffy
 * @date 2019/11/27 18:23
 */
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2

//1. add dependency
//2. 建立Config Class
//3. 两个方法： Config, Info
//4. Swagger 访问：
public class Swagger2Config {

    @Bean
    public Docket webApiConfig() {

        return new Docket(DocumentationType.SWAGGER_2)
                .groupName("webApi")
                .apiInfo(webApiInfo())
                .select()
                .build();
    }


//    @Bean
//
//    public Docket adminApiConfig() {
//
//        return new Docket(DocumentationType.SWAGGER_2)
//                .groupName("adminApi")
//                .apiInfo(adminApiInfo())
//                .select()
//                .paths(Predicates.and(PathSelectors.regex("/admin/.*")))
//                .build();
//    }


    private ApiInfo webApiInfo() {
        return new ApiInfoBuilder()
                .title("网站-统计中心API文档")
                .description("本文档描述了统计中心微服务接口定义")
                .version("1.0")
                .contact(new Contact("Thoffy", "xxx.com", "123@123.com"))
                .build();
    }


//    private ApiInfo adminApiInfo() {
//        return new ApiInfoBuilder()
//                .title("后台管理系统-课程中心API文档")
//                .description("本文档描述了后台管理系统课程中心微服务接口定义")
//                .version("1.0")
//                .contact(new Contact("Helen", "http://atguigu.com", "55317332@qq.com"))
//                .build();
//    }
}
