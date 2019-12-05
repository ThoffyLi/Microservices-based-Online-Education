package com.online.edu.eduservice.controller;


import com.online.edu.common.R;
import com.online.edu.eduservice.entity.EduVideo;
import com.online.edu.eduservice.service.EduVideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 * 课程视频 前端控制器
 * </p>
 *
 * @author Thoffy
 * @since 2019-11-20
 */
@RestController
@RequestMapping("/eduservice/video")
@CrossOrigin
public class EduVideoController {

    @Autowired
    private EduVideoService eduVideoService;


//    //删除video以及S3里的视频：不能直接用removeById，需要自己写一个
//    @DeleteMapping("{videoId}")
//    public R deleteVideoById(@PathVariable String videoId){
//        boolean result = eduVideoService.removeVideo(Long.parseLong(videoId));
//        if (result){
//            return R.ok();
//        }else {
//            return R.error();
//        }
//    }



    //修改video
    @PostMapping("updateVideo")
    public R updateVideo(@RequestBody EduVideo eduVideo){
        boolean result = eduVideoService.updateById(eduVideo);
        if (result){
            return R.ok();
        }
        else {
            return R.error();
        }
    }


    // 根据id查询
    @GetMapping("{videoId}")
    public R getVideoById(@PathVariable String videoId){
        EduVideo eduVideo = eduVideoService.getById(Long.parseLong(videoId));
        return R.ok().data("eduVideo",eduVideo);
    }

    //添加Video
    @PostMapping("addVideo")
    public R addVideo(@RequestBody EduVideo eduVideo){

        boolean save = eduVideoService.save(eduVideo);
        if (save){
            return R.ok();
        }
        else {
            return R.error();
        }
    }

}

