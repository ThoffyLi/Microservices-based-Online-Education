package com.online.edu.eduservice.service;

import com.online.edu.eduservice.entity.EduChapter;
import com.baomidou.mybatisplus.extension.service.IService;
import com.online.edu.eduservice.entity.dto.EduChapterDto;

import java.util.List;

/**
 * <p>
 * 课程 服务类
 * </p>
 *
 * @author Thoffy
 * @since 2019-11-20
 */
public interface EduChapterService extends IService<EduChapter> {

    boolean deleteChapterByCourseId(Long id);

    List<EduChapterDto> getChapterVideoListByCourseId(Long courseId);

    boolean removeChapterById(Long id);
}

