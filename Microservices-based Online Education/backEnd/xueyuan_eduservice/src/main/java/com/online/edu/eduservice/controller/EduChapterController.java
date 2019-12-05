package com.online.edu.eduservice.controller;


import com.online.edu.common.R;
import com.online.edu.eduservice.entity.EduChapter;
import com.online.edu.eduservice.entity.dto.EduChapterDto;
import com.online.edu.eduservice.service.EduChapterService;
import com.online.edu.eduservice.service.EduVideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <p>
 * 课程 前端控制器
 * </p>
 *
 * @author Thoffy
 * @since 2019-11-20
 */
@RestController
@RequestMapping("/eduservice/chapter")
@CrossOrigin
public class EduChapterController {

    @Autowired
    private EduChapterService eduChapterService;


    //删除chapter
    @DeleteMapping("{chapterId}")
    public R deleteChapter(@PathVariable String chapterId){

        boolean result = eduChapterService.removeChapterById(Long.parseLong(chapterId));
        if (result){
            return R.ok();
        }
        else{
            return R.error();
        }
    }



    //修改章节以后进行上传
    @PostMapping("updateChapter")
    public R updateChapter(@RequestBody EduChapter eduChapter){

        boolean result = eduChapterService.updateById(eduChapter);
        if (result){
            return R.ok();
        }
        else{
            return R.error();
        }
    }



    //根据chapterId查询,为了得到对象进行修改
    @GetMapping("getChapterInfo/{chapterId}")
    public R getChapterInfo(@PathVariable String chapterId){
        EduChapter eduChapter = eduChapterService.getById(Long.parseLong(chapterId));
        return R.ok().data("eduChapter",eduChapter);
    }

    //添加chapter
    @PostMapping("addChapter")
    public R addChapter(@RequestBody EduChapter eduChapter){

        boolean save = eduChapterService.save(eduChapter);
        if (save){
            return R.ok();
        }
        else{
            return R.error();
        }
    }



    //根据courseId 查询chapter和video
    @GetMapping("getChapterVideoList/{courseId}")
    public R getChapterVideoListByCourseId(@PathVariable String courseId){

        List<EduChapterDto> list = eduChapterService.getChapterVideoListByCourseId(Long.parseLong(courseId));
        return R.ok().data("items",list);

    }



}

