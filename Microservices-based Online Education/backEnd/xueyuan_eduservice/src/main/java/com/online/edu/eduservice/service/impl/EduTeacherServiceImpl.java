package com.online.edu.eduservice.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.netflix.discovery.converters.Auto;
import com.online.edu.eduservice.entity.EduCourse;
import com.online.edu.eduservice.entity.EduTeacher;
import com.online.edu.eduservice.entity.query.QueryTeacher;
import com.online.edu.eduservice.mapper.EduTeacherMapper;
import com.online.edu.eduservice.service.EduCourseService;
import com.online.edu.eduservice.service.EduTeacherService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 * 讲师 服务实现类
 * </p>
 *
 * @author Thoffy
 * @since 2019-11-04
 */
@Service
public class EduTeacherServiceImpl extends ServiceImpl<EduTeacherMapper, EduTeacher> implements EduTeacherService {


    @Autowired
    EduCourseService eduCourseService;


    @Override
    public void pageListCondition(Page<EduTeacher> pageTeacher, QueryTeacher queryTeacher) {
        //判断queryTeacher里带的条件值是否存在，再进行条件拼接
        if (queryTeacher == null){
            //无条件 -> 分页only
            baseMapper.selectPage(pageTeacher, null);
            return;
        }

        //获取条件值
        String name = queryTeacher.getName();
        String level = queryTeacher.getLevel();
        String begin = queryTeacher.getBegin();
        String end = queryTeacher.getEnd();

        QueryWrapper<EduTeacher> wrapper = new QueryWrapper<>();
        if (emptyOrNull(name)){
            wrapper.like("name",name);
        }

        if (emptyOrNull(level)){
            wrapper.eq("level",level);
        }

        if (emptyOrNull(begin)){
            wrapper.ge("gmt_create",begin);
        }

        if (emptyOrNull(begin)){
            wrapper.le("gmt_create",end);
        }

        baseMapper.selectPage(pageTeacher,wrapper);

    }


    //Front 分页查询
    @Override
    public Map<String, Object> getFrontTeacherList(Page<EduTeacher> pageTeacher) {

        baseMapper.selectPage(pageTeacher, null);

        List<EduTeacher> records = pageTeacher.getRecords();//每页的数据
        Long total = pageTeacher.getTotal();//总记录数
        Long size = pageTeacher.getSize();//每页显示记录数
        Long pages = pageTeacher.getPages();//总页数
        Long current = pageTeacher.getCurrent();//当前页

        boolean hasNext = pageTeacher.hasNext();//是否有下一页
        boolean hasPrevious = pageTeacher.hasPrevious();//是否有上一页

        Map<String,Object> map = new HashMap<>();
        map.put("items",records);
        map.put("current",current);
        map.put("pages",pages);
        map.put("size",size);
        map.put("total",total);
        map.put("hasNext",hasNext);
        map.put("hasPrevious",hasPrevious );

        return map;
    }


    //Front 根据讲师id查询讲师的课程
    @Override
    public List<EduCourse> getCourseListByTeacherId(Long id) {
        QueryWrapper<EduCourse> wrapper = new QueryWrapper<>();
        wrapper.eq("teacher_id",id);
        List<EduCourse> list = eduCourseService.list(wrapper);
        return list;
    }

    private boolean emptyOrNull(String field){
        return (field != null) && (!"".equals(field));
    }

}
