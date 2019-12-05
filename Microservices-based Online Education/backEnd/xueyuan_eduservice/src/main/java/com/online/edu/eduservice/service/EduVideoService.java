package com.online.edu.eduservice.service;

import com.online.edu.eduservice.entity.EduVideo;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 课程视频 服务类
 * </p>
 *
 * @author Thoffy
 * @since 2019-11-20
 */
public interface EduVideoService extends IService<EduVideo> {

    boolean deleteVideoByCourseId(Long courseId);

    List<EduVideo> getVideosByChapterId(Long chapterId);
}

