package com.online.edu.eduservice.mapper;

import com.online.edu.eduservice.entity.EduCourse;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.online.edu.eduservice.entity.dto.CourseAllInfoDto;
import com.online.edu.eduservice.entity.dto.CourseInfoDto;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * <p>
 * 课程 Mapper 接口
 * </p>
 *
 * @author Thoffy
 * @since 2019-11-19
 */
public interface EduCourseMapper extends BaseMapper<EduCourse> {

    //根据课程id查询详细信息 publish review
    CourseInfoDto getCourseInfoAll(@RequestParam("courseId") Long courseId);
    //xml中的sql语句变量从这里取 名称需要@RequestParam中一致！！！

    //前台 根据课程id查询详情
    CourseAllInfoDto getFrontCourseAllInfo(Long id);

}
