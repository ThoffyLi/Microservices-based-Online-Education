package com.online.edu.statistics.service;

import com.online.edu.statistics.entity.Daily;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.Map;

/**
 * <p>
 * 网站统计日数据 服务类
 * </p>
 *
 * @author Thoffy
 * @since 2019-11-27
 */
public interface DailyService extends IService<Daily> {

    void getCountRegisterNum(String day);

    Map<String, Object> getCountData(String type, String beginTime, String endTime);
}
