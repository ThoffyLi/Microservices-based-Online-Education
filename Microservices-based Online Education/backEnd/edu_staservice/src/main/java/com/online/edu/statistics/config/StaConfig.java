package com.online.edu.statistics.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * @author Thoffy
 * @date 2019/11/27 17:29
 */
@EnableTransactionManagement
@Configuration
@MapperScan("com.online.edu.statistics.mapper")
public class StaConfig {
}
