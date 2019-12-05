package com.online.edu.eduservice.controller;


import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.online.edu.common.R;
import com.online.edu.eduservice.entity.EduTeacher;
import com.online.edu.eduservice.entity.query.QueryTeacher;
import com.online.edu.eduservice.service.EduTeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.management.Query;
import java.util.List;

/**
 * <p>
 * 讲师 前端控制器
 * </p>
 *
 * @author Thoffy
 * @since 2019-11-04
 */
@RestController
@RequestMapping("/eduservice/teacher")
@CrossOrigin
public class EduTeacherController {

    @Autowired
    private EduTeacherService eduTeacherService;


    //根据id修改
    @PostMapping("updateTeacher/")
    public R updateTeacher( @RequestBody EduTeacher eduTeacher){

        boolean b = eduTeacherService.updateById(eduTeacher);
        if (b){
            return R.ok();
        }
        else {
            return R.error();
        }

    }


    //根据id查询
    @GetMapping("getTeacherInfo/{id}")
    public R getTeacherInfoById(@PathVariable String id){

        EduTeacher eduTeacher = eduTeacherService.getById(Long.parseLong(id));
        return R.ok().data("eduTeacher",eduTeacher);
    }


    // 添加讲师
    //@RequestBody: 把java对象解析成json串
    @PostMapping("addTeacher")
    public R addTeacher(@RequestBody EduTeacher eduTeacher){

        boolean save = eduTeacherService.save(eduTeacher);

        if (save){
            return R.ok();
        }
        else {
            return R.error();
        }

    }



    // 条件查询 + 分页 ： 专门创建一个类用于传递条件。注意@RequestBody(required = false)处也可以直接传对象，但是写注解可以让前端必须穿json而非一个个字段值。
    //用@RequestBody时，必须改成PostMapping,否则得不到json
    @PostMapping("moreConditionPageList/{page}/{limit}")
    public R moreConditionPageList(@PathVariable Long page, @PathVariable Long limit, @RequestBody(required = false) QueryTeacher queryTeacher){

        Page<EduTeacher> pageTeacher = new Page<>(page,limit);

        // 调用service层方法实现逻辑
        eduTeacherService.pageListCondition(pageTeacher,queryTeacher);

        long total = pageTeacher.getTotal();
        List<EduTeacher> records = pageTeacher.getRecords();
        return R.ok().data("total",total).data("items",records);

    }




    // 分页查询讲师列表
    @GetMapping("pageList/{page}/{limit}")
    public R getPageTeacherList(@PathVariable Long page, @PathVariable Long limit){

        //创建page对象，传递两个参数
        Page<EduTeacher> pageTeacher = new Page<>(page,limit);

        //调用方法
        eduTeacherService.page(pageTeacher,null);

        //获取数据
        long total = pageTeacher.getTotal();
        List<EduTeacher> records = pageTeacher.getRecords();

        return R.ok().data("total",total).data("items",records);

    }


    // 查询所有讲师
    @GetMapping
    public R getAllTeacherList(){
        List<EduTeacher> allTeacherList = eduTeacherService.list(null);
        return R.ok().data("items",allTeacherList);
    }

 //逻辑删除讲师
    @DeleteMapping("{id}")
    public boolean deleteTeacherbyId(@PathVariable String id){// DELETE http://localhost:8080/eduservice/teacher/id

        return eduTeacherService.removeById(Long.parseLong(id));
    }




}

