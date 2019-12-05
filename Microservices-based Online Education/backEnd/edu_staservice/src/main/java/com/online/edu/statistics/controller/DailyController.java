package com.online.edu.statistics.controller;


import com.online.edu.common.R;
import com.online.edu.statistics.service.DailyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * <p>
 * 网站统计日数据 前端控制器
 * </p>
 *
 * @author Thoffy
 * @since 2019-11-27
 */
@RestController
@RequestMapping("/statistics/daily")
@CrossOrigin
public class DailyController {


    @Autowired
    private DailyService dailyService;


    //返回charts的数据
    //时间['2019-01-02','2019-01-03']   数量[5,6]
    @GetMapping("getCountData/{type}/{beginTime}/{endTime}")
    public R getCountData(@PathVariable("type") String type, @PathVariable("beginTime") String beginTime, @PathVariable("endTime") String endTime ){

        Map<String, Object> map = dailyService.getCountData(type,beginTime,endTime);

        return R.ok().data("mapdata",map);
    }


    //获取某一天的用户注册人数
    @GetMapping("getStatisticsDay/{day}")
    public R getStatisticsDay(@PathVariable String day){

        dailyService.getCountRegisterNum(day);

        return R.ok();

    }

}

