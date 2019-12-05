package com.online.edu.eduservice.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.online.edu.eduservice.client.VdoClient;
import com.online.edu.eduservice.entity.EduVideo;
import com.online.edu.eduservice.mapper.EduVideoMapper;
import com.online.edu.eduservice.service.EduVideoService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 课程视频 服务实现类
 * </p>
 *
 * @author Thoffy
 * @since 2019-11-20
 */
@Service
public class EduVideoServiceImpl extends ServiceImpl<EduVideoMapper, EduVideo> implements EduVideoService {

    //注入video服务
    @Autowired
    private VdoClient vdoClient;

//
//    @Override
//    public boolean removeVideo(Long id) {
//
//        //删除S3的视频
//        EduVideo eduVideo = baseMapper.selectById(id);
//        String year = eduVideo.getVideoPath().split("/")[0];
//        String month = eduVideo.getVideoPath().split("/")[1];
//        String name = eduVideo.getVideoPath().split("/")[2];
//        System.out.println(year);
//        System.out.println(month);
//        System.out.println(name);
//        vdoClient.removeVideoS3(year,month,name);
//
//        int deleteTable = baseMapper.deleteById(id);
//        return deleteTable > 0;
//    }

    @Override
    public List<EduVideo> getVideosByChapterId(Long chapterId) {
        QueryWrapper<EduVideo> wrapper = new QueryWrapper<>();
        wrapper.eq("chapter_id",chapterId);
        List<EduVideo> eduVideos = baseMapper.selectList(wrapper);
        return eduVideos;
    }



    @Override
    public boolean deleteVideoByCourseId(Long id) {
        QueryWrapper<EduVideo> wrapper = new QueryWrapper<>();
        wrapper.eq("course_id",id);
        // delete S3 video first
        List<EduVideo> eduVideos = baseMapper.selectList(wrapper);
        if (eduVideos != null && eduVideos.size() > 0){
            for (EduVideo eduVideo : eduVideos){
                String year = eduVideo.getVideoPath().split("/")[0];
                String month = eduVideo.getVideoPath().split("/")[1];
                String name = eduVideo.getVideoPath().split("/")[2];
                vdoClient.removeVideoS3(year,month,name);
            }
        }

        // delete video from db
        int result = baseMapper.delete(wrapper);
        return result > 0;
    }




}
