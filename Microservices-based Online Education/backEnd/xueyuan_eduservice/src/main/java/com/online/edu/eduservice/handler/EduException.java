package com.online.edu.eduservice.handler;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Thoffy
 * @date 2019/11/4 22:55
 */

/*
自定义异常
 */

@Data
//生成构造注解
@NoArgsConstructor
@AllArgsConstructor
public class EduException extends RuntimeException {

    private Integer code;
    private String message;

}
