package com.online.edu.statistics.client;

import com.online.edu.common.R;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * @author Thoffy
 * @date 2019/11/27 18:11
 */

@FeignClient("xueyuan-ucservice")
@Component
public interface UcenterClient {

    //定义调用的方法
    //方法路径
    @GetMapping("/ucenter/member/countRegisterNum/{day}")
    public R countRegisterNum(@PathVariable("day") String day);
}
