package com.online.edu.eduservice.service;

import com.online.edu.eduservice.entity.EduSubject;
import com.baomidou.mybatisplus.extension.service.IService;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * <p>
 * 课程科目 服务类
 * </p>
 *
 * @author Thoffy
 * @since 2019-11-18
 */
public interface EduSubjectService extends IService<EduSubject> {


    //读取excel内容
    List<String> importSubject(MultipartFile file);

    //Category 分类的删除
    boolean deleteSubjectById(Long parseLong);

    //查询所有的分类
    List getSubjectList();

    //Category 添加一级分类
    boolean saveOneLevel(EduSubject eduSubject);

    //Category 添加二级分类
    boolean saveTwoLevel(EduSubject eduSubject);
}
