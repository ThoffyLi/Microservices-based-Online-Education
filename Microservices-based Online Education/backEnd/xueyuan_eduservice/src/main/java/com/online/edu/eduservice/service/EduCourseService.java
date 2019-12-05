package com.online.edu.eduservice.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.online.edu.eduservice.entity.EduCourse;
import com.baomidou.mybatisplus.extension.service.IService;
import com.online.edu.eduservice.entity.dto.CourseAllInfoDto;
import com.online.edu.eduservice.entity.dto.CourseInfoDto;
import com.online.edu.eduservice.entity.form.CourseInfoForm;

import java.util.Map;

/**
 * <p>
 * 课程 服务类
 * </p>
 *
 * @author Thoffy
 * @since 2019-11-19
 */
public interface EduCourseService extends IService<EduCourse> {

    //添加课程信息
    Long insertCourseInfo(CourseInfoForm courseInfoForm);

    //根据subject id 查询课程，返回CourseInfoForm到前端做数据回显
    CourseInfoForm getIdCourse(Long parseLong);

    //修改课程信息
    boolean upCourse(CourseInfoForm courseInfoForm);

    //根据id删除课程:要删除对应的章节，小节，描述
    boolean removeCourseId(Long id);

    //根据id查询课程详细信息 publish review
    CourseInfoDto getAllCourseInfo(Long id);

    Map<String, Object> listCoursePage(Page<EduCourse> pageCourse);


    //前台根据课程id查询课程详情
    CourseAllInfoDto getCourseAllInfo(Long id);



}
