package com.online.edu.eduservice.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.online.edu.eduservice.entity.EduChapter;
import com.online.edu.eduservice.entity.EduCourse;
import com.online.edu.eduservice.entity.EduCourseDescription;
import com.online.edu.eduservice.entity.EduTeacher;
import com.online.edu.eduservice.entity.dto.CourseAllInfoDto;
import com.online.edu.eduservice.entity.dto.CourseInfoDto;
import com.online.edu.eduservice.entity.form.CourseInfoForm;
import com.online.edu.eduservice.handler.EduException;
import com.online.edu.eduservice.mapper.EduCourseMapper;
import com.online.edu.eduservice.service.EduChapterService;
import com.online.edu.eduservice.service.EduCourseDescriptionService;
import com.online.edu.eduservice.service.EduCourseService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.online.edu.eduservice.service.EduVideoService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 * 课程 服务实现类
 * </p>
 *
 * @author Thoffy
 * @since 2019-11-19
 */
@Service
public class EduCourseServiceImpl extends ServiceImpl<EduCourseMapper, EduCourse> implements EduCourseService {

    @Autowired
    private EduCourseDescriptionService eduCourseDescriptionService;

    @Autowired
    private EduChapterService eduChapterService;

    @Autowired
    private EduVideoService eduVideoService;

    @Override
    public CourseInfoDto getAllCourseInfo(Long id) {
        //自己写的方法：去封装化
        CourseInfoDto courseInfoAll = baseMapper.getCourseInfoAll(id);
        return courseInfoAll;
    }

    @Override
    public Map<String, Object> listCoursePage(Page<EduCourse> pageCourse) {
        baseMapper.selectPage(pageCourse,null);
        List<EduCourse> records = pageCourse.getRecords();//每页的数据
        Long total = pageCourse.getTotal();//总记录数
        Long size = pageCourse.getSize();//每页显示记录数
        Long pages = pageCourse.getPages();//总页数
        Long current = pageCourse.getCurrent();//当前页
        boolean hasNext = pageCourse.hasNext();//是否有下一页
        boolean hasPrevious = pageCourse.hasPrevious();//是否有上一页
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

    @Override
    public CourseAllInfoDto getCourseAllInfo(Long id) {
        return baseMapper.getFrontCourseAllInfo(id);
    }

    @Override
    public boolean removeCourseId(Long id) {
        //1.删除chapter
        boolean deleteChapter = eduChapterService.deleteChapterByCourseId(id);
        //2.删除小节(先删除S3视频，再删除db的video)
        boolean deleteVideo = eduVideoService.deleteVideoByCourseId(id);
        //3.shanc描述
        boolean deleteDescription = eduCourseDescriptionService.deleteDescriptionByCourseId(id);
        //4.删除课程本身
        int result = baseMapper.deleteById(id);
        return result > 0;
    }

    @Override
    public boolean upCourse(CourseInfoForm courseInfoForm) {
        //修改两张表
        //1.修改课程基本信息表
        EduCourse eduCourse = new EduCourse();
        BeanUtils.copyProperties(courseInfoForm,eduCourse);
        int result = baseMapper.updateById(eduCourse);

        if (result == 0){
            throw new EduException(20001,"修改课程信息失败");
        }
        // 2.修改课程描述表
        EduCourseDescription eduCourseDescription = new EduCourseDescription();
        Long id = courseInfoForm.getId();
        String description = courseInfoForm.getDescription();
        eduCourseDescription.setId(id).setDescription(description);
        boolean b = eduCourseDescriptionService.updateById(eduCourseDescription);
        return b;
    }




    @Override
    public CourseInfoForm getIdCourse(Long id) {
        //查询两张表：
        //1.基本信息表
        EduCourse eduCourse = baseMapper.selectById(id);

        if (eduCourse == null){
            throw new EduException(20001,"没有课程信息！");
        }
        CourseInfoForm courseInfoForm = new CourseInfoForm();
        BeanUtils.copyProperties(eduCourse,courseInfoForm);

        //2.课程描述表
        String description = eduCourseDescriptionService.getById(id).getDescription();
        courseInfoForm.setDescription(description);
        return courseInfoForm;
    }




    @Override
    public Long insertCourseInfo(CourseInfoForm courseInfoForm) {

        //课程基本信息 -> course表
        EduCourse eduCourse = new EduCourse();
        BeanUtils.copyProperties(courseInfoForm,eduCourse);
        int result =baseMapper.insert(eduCourse);
        //判断：如果课程基本信息添加成功，才继续加描述，否则不加
        if (result == 0) {
            throw new EduException(20001, "添加课程基本信息失败");
        }
        //课程描述 -> description表
        EduCourseDescription eduCourseDescription = new EduCourseDescription();
        String description = courseInfoForm.getDescription();
        eduCourseDescription.setDescription(description);
        eduCourseDescription.setId(eduCourse.getId());
        boolean save = eduCourseDescriptionService.save(eduCourseDescription);
        if (save){
            return eduCourse.getId();//返回courseid, 为了下一步syllabus
        }else {
            return null;
        }
    }


}
