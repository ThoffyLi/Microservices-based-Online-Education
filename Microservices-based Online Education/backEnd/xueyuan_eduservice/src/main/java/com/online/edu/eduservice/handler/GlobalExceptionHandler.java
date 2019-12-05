package com.online.edu.eduservice.handler;


import com.online.edu.common.R;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;


/**
 * @author Thoffy
 * @date 2019/11/4 22:46
 */

/*
统一异常处理
 */

@ControllerAdvice  // 运用AOP思想：不改变原代码的情况下实现功能的增强
public class GlobalExceptionHandler {

   //对所有Exception做处理
    @ExceptionHandler(Exception.class)
    @ResponseBody
    public R error(Exception e){
        e.printStackTrace();
        return R.error().message("Exception Catched!");
    }


      //对特定Exception处理:Arithmetic
//    @ExceptionHandler(ArithmeticException.class)
//    @ResponseBody
//    public R errorAri(ArithmeticException e){
//        e.printStackTrace();
//        return R.error().message("Arithmetic Exception Catched!");
//    }


    //自定义异常
//    @ExceptionHandler(EduException.class)
//    @ResponseBody
//    public R errorAri(EduException e){
//        e.printStackTrace();
//        return R.error().message(e.getMessage()).code(e.getCode());
//    }

}
