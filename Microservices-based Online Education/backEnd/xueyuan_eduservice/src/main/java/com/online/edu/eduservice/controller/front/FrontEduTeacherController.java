package com.online.edu.eduservice.controller.front;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import com.online.edu.common.R;
import com.online.edu.eduservice.entity.EduCourse;
import com.online.edu.eduservice.entity.EduTeacher;
import com.online.edu.eduservice.service.EduTeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * @author Thoffy
 * @date 2019/11/30 16:25
 */

// 前台讲师Controller
@RestController
@RequestMapping("/eduservice/frontTeacher")
@CrossOrigin
public class FrontEduTeacherController {

    @Autowired
    private EduTeacherService eduTeacherService;




    @GetMapping("{id}")
    public R getFrontTeacherCourseById(@PathVariable String id){
        //讲师信息：只有一个
        EduTeacher eduTeacher = eduTeacherService.getById(Long.parseLong(id));
        //所讲课程：可能很多,List
        List<EduCourse> courseList = eduTeacherService.getCourseListByTeacherId(Long.parseLong(id));
        return R.ok().data("eduTeacher",eduTeacher).data("courseList",courseList);
    }



     //获取讲师列表
    @GetMapping("{page}/{limit}")
    public R getFrontTeacherListPage(@PathVariable Long page, @PathVariable Long limit){

        Page<EduTeacher> pageTeacher = new Page<>(page,limit);
        Map<String,Object> map =  eduTeacherService.getFrontTeacherList(pageTeacher);
        return R.ok().data(map);
    }



    }
