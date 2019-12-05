package com.online.edu.eduservice.service;

import com.online.edu.eduservice.entity.EduCourseDescription;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 * 课程简介 服务类
 * </p>
 *
 * @author Thoffy
 * @since 2019-11-19
 */
public interface EduCourseDescriptionService extends IService<EduCourseDescription> {

    boolean deleteDescriptionByCourseId(Long id);

}
