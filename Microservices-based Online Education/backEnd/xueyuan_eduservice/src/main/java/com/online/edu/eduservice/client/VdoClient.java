package com.online.edu.eduservice.client;

import com.online.edu.common.R;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;


/**
 * @author Thoffy
 * @date 2019/11/26 23:20
 */

@FeignClient("xueyuan-videoservice")
@Component
public interface VdoClient {

    // 定义要调用的方法
    //方法调用路径
    @DeleteMapping("/videoservice/vod/delete/{year}/{month}/{name}") //这里PathVariable后面必须加参数名称！！！
    public R removeVideoS3(@PathVariable("year") String year, @PathVariable("month") String month, @PathVariable("name") String name);


}
