package com.online.edu.ucenter.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * @author Thoffy
 * @date 2019/11/27 17:11
 */

@EnableTransactionManagement
@Configuration
@MapperScan("com.online.edu.ucenter.mapper")
public class UcenterConfig {
}
