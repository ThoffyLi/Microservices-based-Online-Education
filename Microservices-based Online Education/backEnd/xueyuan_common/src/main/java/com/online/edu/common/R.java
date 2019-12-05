package com.online.edu.common;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.HashMap;
import java.util.Map;

/**
 * @author Thoffy
 * @date 2019/11/4 20:08
 */

/*
具体数据返回结构

{
  "success": 布尔, //响应是否成功
  "code": 数字, //响应码
  "message": 字符串, //返回消息
  "data": HashMap //返回数据，放在键值对中
}
 */

@Data
//@ApiModel(value = "全局统一返回结果")
public class R {

    private Boolean success;
    private Integer code;
    private String message;
    private Map<String,Object> data = new HashMap<>();

    private R(){}


    public static R ok(){
        R r = new R();
        r.setSuccess(true);
        r.setCode(ResultCode.SUCCESS);
        r.setMessage("Success!");
        return r;
    }

    public static R error(){
        R r = new R();
        r.setSuccess(false);
        r.setCode(ResultCode.ERROR);
        r.setMessage("Fail!");
        return r;
    }

//    public static R setResult(ResultCodeEnum resultCodeEnum){
//
//        R r = new R();
//        r.setSuccess(resultCodeEnum.getSuccess());
//        r.setCode(resultCodeEnum.getCode());
//        r.setMessage(resultCodeEnum.getMessage());
//        return r;
//    }

    // 链式编程
    public R success(Boolean success){
        this.setSuccess(success);
        return this;
    }


    public R message(String message){
        this.setMessage(message);
        return this;
    }

    public R code(Integer code){
        this.setCode(code);
        return this;
    }

    public R data(String key, Object value){
        this.data.put(key, value);
        return this;

    }

    public R data(Map<String, Object> map){
        this.setData(map);
        return this;
    }


//    @ApiModelProperty(value = "是否成功")
//    private Boolean success;
//
//
//    @ApiModelProperty(value = "返回码")
//    private Integer code;
//
//
//    @ApiModelProperty(value = "返回消息")
//    private String message;
//
//
//    @ApiModelProperty(value = "返回数据")
//    private Map<String, Object> data = new HashMap<String, Object>();

}
