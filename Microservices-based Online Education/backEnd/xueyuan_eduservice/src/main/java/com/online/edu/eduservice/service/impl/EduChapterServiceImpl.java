package com.online.edu.eduservice.service.impl;

import com.amazonaws.internal.ListWithAutoConstructFlag;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.online.edu.eduservice.client.VdoClient;
import com.online.edu.eduservice.entity.EduChapter;
import com.online.edu.eduservice.entity.EduVideo;
import com.online.edu.eduservice.entity.dto.EduChapterDto;
import com.online.edu.eduservice.entity.dto.EduVideoDto;
import com.online.edu.eduservice.mapper.EduChapterMapper;
import com.online.edu.eduservice.service.EduChapterService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.online.edu.eduservice.service.EduVideoService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 * 课程 服务实现类
 * </p>
 *
 * @author Thoffy
 * @since 2019-11-20
 */
@Service
public class EduChapterServiceImpl extends ServiceImpl<EduChapterMapper, EduChapter> implements EduChapterService {


    @Autowired
    private EduVideoService eduVideoService;

    //注入video服务
    @Autowired
    private VdoClient vdoClient;


    @Override
    public boolean removeChapterById(Long id) {

        //判断chapter中是否有video
        QueryWrapper<EduVideo> wrapper1 = new QueryWrapper<>();
        wrapper1.eq("chapter_id",id);
        List<EduVideo> eduVideos = eduVideoService.getVideosByChapterId(id);
        if (eduVideos != null && eduVideos.size() > 0){ //delete video from S3
            for (EduVideo eduVideo : eduVideos) {
                String year = eduVideo.getVideoPath().split("/")[0];
                String month = eduVideo.getVideoPath().split("/")[1];
                String name = eduVideo.getVideoPath().split("/")[2];
                vdoClient.removeVideoS3(year, month, name);
            }
        }
        boolean removeVideo = eduVideoService.remove(wrapper1);
        //delete chapter
        int result = baseMapper.deleteById(id);
        return (result > 0) || removeVideo ;
    }


    @Override
    public List<EduChapterDto> getChapterVideoListByCourseId(Long courseId) {

        //1.根据courseId查询Chapter
        QueryWrapper<EduChapter> wrapper1 = new QueryWrapper<>();
        wrapper1.eq("course_id",courseId);
        List<EduChapter> eduChapters = baseMapper.selectList(wrapper1);

        //2.根据courseId查询Video
        QueryWrapper<EduVideo> wrapper2 = new QueryWrapper<>();
        wrapper2.eq("course_id",courseId);
        List<EduVideo> videos = eduVideoService.list(wrapper2);

        List<EduChapterDto> finalDtoList = new ArrayList<>();

        //3.遍历chapter,复制转换dto
        for (int i = 0; i < eduChapters.size(); i++){
            EduChapter chapter= eduChapters.get(i);
            EduChapterDto chapterDto = new EduChapterDto();
            BeanUtils.copyProperties(chapter,chapterDto);

            //4.遍历video,复制转换dto,setChildren
            List<EduVideoDto> childrenList = new ArrayList<>();
            for (int m = 0; m < videos.size(); m++) {
                EduVideo eduVideo = videos.get(m);
                if (eduVideo.getChapterId().equals(chapter.getId())){
                    EduVideoDto videoDto = new EduVideoDto();
                    BeanUtils.copyProperties(eduVideo,videoDto);

                    childrenList.add(videoDto);
                }
            }
            chapterDto.setChildren(childrenList);
            finalDtoList.add(chapterDto);
        }

        return finalDtoList;


    }



    @Override
    public boolean deleteChapterByCourseId(Long id) {
        QueryWrapper<EduChapter> wrapper = new QueryWrapper<>();
        wrapper.eq("course_id",id);
        int result = baseMapper.delete(wrapper);
        return result > 0;
    }


}
