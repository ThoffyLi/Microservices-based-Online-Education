package com.online.edu.statistics.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.online.edu.common.R;
import com.online.edu.statistics.client.UcenterClient;
import com.online.edu.statistics.entity.Daily;
import com.online.edu.statistics.mapper.DailyMapper;
import com.online.edu.statistics.service.DailyService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import io.swagger.models.auth.In;
import org.apache.commons.lang3.RandomUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 * 网站统计日数据 服务实现类
 * </p>
 *
 * @author Thoffy
 * @since 2019-11-27
 */
@Service
public class DailyServiceImpl extends ServiceImpl<DailyMapper, Daily> implements DailyService {


    @Autowired
    private UcenterClient ucenterClient;


    @Override
    public Map<String, Object> getCountData(String type, String beginTime, String endTime) {

        QueryWrapper<Daily> wrapper = new QueryWrapper<>();
        wrapper.between("date_calculated",beginTime,endTime);
        wrapper.select("date_calculated",type);
        List<String> timeList = new ArrayList<>();
        List<Integer> dataList = new ArrayList<>();
        List<Daily> dailyList = baseMapper.selectList(wrapper);
        for (int i = 0; i < dailyList.size(); i++) {
            Daily daily = dailyList.get(i);
            String dateCalculated = daily.getDateCalculated();
            timeList.add(dateCalculated);
            //判断data type
            switch (type){
                case "login_num":
                    Integer loginNum = daily.getLoginNum();
                    dataList.add(loginNum);
                    break;
                case "register_num":
                    Integer registerNum = daily.getRegisterNum();
                    dataList.add(registerNum);
                    break;
                case "video_view_num":
                    Integer videoViewNum = daily.getVideoViewNum();
                    dataList.add(videoViewNum);
                    break;
                    default:break;
            }
        }
        Map<String, Object> map = new HashMap<>();
        map.put("timeList",timeList);
        map.put("dataList",dataList);
        return map;


    }



    @Override
    public void getCountRegisterNum(String day) {
        R r = ucenterClient.countRegisterNum(day);
        Integer registerCount = (Integer) r.getData().get("registerCount");
  //把获取的数据添加到统计分析表中
        Integer courseNum = RandomUtils.nextInt(100,200);
        Integer logInNum = RandomUtils.nextInt(100,200);
        Integer videoViewNum = RandomUtils.nextInt(100,200);


        Daily daily = new Daily();
        daily.setDateCalculated(day);
        daily.setRegisterNum(registerCount);
        daily.setCourseNum(courseNum);
        daily.setLoginNum(logInNum);
        daily.setVideoViewNum(videoViewNum);

//        System.out.println(daily);
        QueryWrapper<Daily> wrapper = new QueryWrapper<>();
        wrapper.eq("date_calculated",day);
        if (baseMapper.selectList(wrapper).size() > 0){
            baseMapper.delete(wrapper);
        }

        baseMapper.insert(daily);

    }


}
