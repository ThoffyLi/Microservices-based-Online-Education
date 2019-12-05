package com.online.edu.eduservice.controller;


import com.online.edu.common.R;
import com.online.edu.eduservice.entity.EduSubject;
import com.online.edu.eduservice.entity.dto.OneSubjectDto;
import com.online.edu.eduservice.service.EduSubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * <p>
 * 课程科目 前端控制器
 * </p>
 *
 * @author Thoffy
 * @since 2019-11-18
 */
@RestController
@RequestMapping("/eduservice/category")
@CrossOrigin
public class EduSubjectController {


    @Autowired
    private EduSubjectService eduSubjectService;


    //添加一级分类
    @PostMapping("addOneLevel")
    public R addOneLevel(@RequestBody EduSubject eduSubject){

        boolean flag = eduSubjectService.saveOneLevel(eduSubject);
        if (flag){
            return R.ok();
        }
        else {
            return R.error();
        }

    }

    //添加二级分类
    @PostMapping("addTwoLevel")
    public R addTwoLevel(@RequestBody EduSubject eduSubject){

        boolean flag = eduSubjectService.saveTwoLevel(eduSubject);
        if (flag){
            return R.ok();
        }
        else {
            return R.error();
        }
    }


    @DeleteMapping("{id}")
    public R deleteSubjectId(@PathVariable String id){
        boolean flag = eduSubjectService.deleteSubjectById(Long.parseLong(id));

        if (flag) {
            return R.ok();
        } else {
            return R.error();
        }
    }



    // 返回所有分类数据，返回要求的json数据格式
    @GetMapping
    public R getAllSubjectList(){
        List<OneSubjectDto> list = eduSubjectService.getSubjectList();
        return R.ok().data("OneSubjectDto",list);
    }


    //通过上传excel文件 获取文件内容
    @PostMapping("import")
    public R importExcelSubject(@RequestParam("file") MultipartFile file){

        List<String> msg = eduSubjectService.importSubject(file);

        if (msg.size() == 0){
            return R.ok();
        }
        else {
            return R.ok().data("msgList",msg);
        }

    }


}

