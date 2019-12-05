package com.online.edu.eduservice.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.online.edu.common.R;
import com.online.edu.eduservice.entity.EduCourse;
import com.online.edu.eduservice.entity.EduTeacher;
import com.online.edu.eduservice.entity.dto.CourseInfoDto;
import com.online.edu.eduservice.entity.form.CourseInfoForm;
import com.online.edu.eduservice.service.EduCourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <p>
 * 课程 前端控制器
 * </p>
 *
 * @author Thoffy
 * @since 2019-11-19
 */
@RestController
@RequestMapping("/eduservice/course")
@CrossOrigin
public class EduCourseController {

    @Autowired
    private EduCourseService eduCourseService;



    //publish course
    @GetMapping("publish/{id}")
    public R publishCourse(@PathVariable String id){
        EduCourse eduCourse = new EduCourse();
        eduCourse.setId(Long.parseLong(id));
        eduCourse.setStatus("Normal");
        boolean result = eduCourseService.updateById(eduCourse);

        if (result){
            return R.ok();
        }
        else{
            return R.error();
        }
    }




    //根据courseId查询详细信息（多表 for 最终publish页）
    @GetMapping("getAllCourseInfo/{courseId}")
    public R getAllCourseInfo(@PathVariable String courseId){

            CourseInfoDto courseInfoDto = eduCourseService.getAllCourseInfo(Long.parseLong(courseId));
            return R.ok().data("CourseInfo",courseInfoDto);
    }



    //课程列表
    @GetMapping("courseList")
    public R getCourseList(){
        QueryWrapper<EduCourse> wrapper = new QueryWrapper<>();
        wrapper.eq("status","Normal");
        List<EduCourse> list = eduCourseService.list(wrapper);
        return R.ok().data("items",list);
    }


    //根据id删除课程:要删除对应的章节，小节，描述
    @DeleteMapping("{id}")
    public R deleteCoursebyId(@PathVariable String id){

        boolean flag = eduCourseService.removeCourseId(Long.parseLong(id));
        if (flag){
            return R.ok();
        }
        else {
            return R.error();
        }

    }

    //修改课程
    @PostMapping("updateCourse/")
    public R updateCourse( @RequestBody EduCourse eduCourse){

        boolean b = eduCourseService.updateById(eduCourse);
        if (b){
            return R.ok();
        }
        else {
            return R.error();
        }

    }


    //修改课程信息（点击上一步时调用）
    @PostMapping("updateCourseInfo")
    public R updateCourseInfo(@RequestBody CourseInfoForm courseInfoForm){

        boolean flag = eduCourseService.upCourse(courseInfoForm);
        if (flag){
            return R.ok().data("CourseInfoForm",courseInfoForm);
        }
        else {
            return R.error();
        }
    }


    // 根据课程id查询课程信息：为了数据回显
    @GetMapping("getCourseInfo/{id}")
    public R getCourseInfo(@PathVariable String id){

       CourseInfoForm courseInfoForm = eduCourseService.getIdCourse(Long.parseLong(id));
        return R.ok().data("CourseInfoForm",courseInfoForm);
    }


    // 添加课程信息
    @PostMapping
    public R addCourseInfo(@RequestBody CourseInfoForm courseInfoForm){
        Long courseId = eduCourseService.insertCourseInfo(courseInfoForm);
        return R.ok().data("courseId",courseId.toString());//返回courseid, 为了下一步syllabus
    }

}

