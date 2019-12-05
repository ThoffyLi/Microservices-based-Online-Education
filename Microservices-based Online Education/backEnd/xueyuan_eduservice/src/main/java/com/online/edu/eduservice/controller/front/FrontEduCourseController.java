package com.online.edu.eduservice.controller.front;

/**
 * @author Thoffy
 * @date 2019/12/1 11:32
 */

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.online.edu.common.R;
import com.online.edu.eduservice.entity.EduCourse;
import com.online.edu.eduservice.entity.dto.CourseAllInfoDto;
import com.online.edu.eduservice.entity.dto.EduChapterDto;
import com.online.edu.eduservice.service.EduChapterService;
import com.online.edu.eduservice.service.EduCourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


// 前台课程Controller
@RestController
@RequestMapping("/eduservice/frontCourse")
@CrossOrigin
public class FrontEduCourseController {

    @Autowired
    private EduCourseService eduCourseService;

    @Autowired
    private EduChapterService eduChapterService;

    //分页查询前台课程列表
    @GetMapping("{page}/{limit}")
    public R getCourseListPage(@PathVariable Long page, @PathVariable Long limit){
        Page<EduCourse> pageCourse = new Page<>(page,limit);
        Map<String,Object> map = eduCourseService.listCoursePage(pageCourse);
        return R.ok().data(map);
    }


    //根据课程id查询课程详情
    @GetMapping("{id}")
    public R getCourseInfoAll(@PathVariable String id){

        //包含信息：课程，课程描述，讲师，分类 : 用SQL语句
        CourseAllInfoDto courseAllInfo = eduCourseService.getCourseAllInfo(Long.parseLong(id));

        //章节，小节
        List<EduChapterDto> chapterVideoList = eduChapterService.getChapterVideoListByCourseId(Long.parseLong(id));


        return R.ok().data("courseInfo",courseAllInfo).data("chapterVideoList",chapterVideoList);
    }


}
