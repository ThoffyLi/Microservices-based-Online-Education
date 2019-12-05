package com.online.edu.videoservice.controller;
import com.online.edu.common.R;
import com.online.edu.videoservice.entity.VideoDto;
import com.online.edu.videoservice.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author Thoffy
 * @date 2019/11/21 12:17
 */

@RestController
@RequestMapping("/videoservice/vod")
@CrossOrigin
public class VidController {

    @Autowired
    private VideoService videoService;

    //上传视频到S3
    @PostMapping("upload")
    public R uploadS3Video(@RequestParam("file") MultipartFile file){
        String videoPath = videoService.uploadVideoS3(file);
        String videoUrl = videoService.toUrl(videoPath);
        return R.ok().data("videoPath", videoPath).data("videoUrl",videoUrl);
    }

    //删除S3视频1: Dto
    @PostMapping("delete")
    public R deleteS3VideoDto(@RequestBody VideoDto videoDto){
         videoService.deleteFromS3(videoDto.getPathName());
         return R.ok();

    }

    //删除S3视频2 : pathName
    @DeleteMapping("delete/{year}/{month}/{name}")
    public R deleteS3VideoId(@PathVariable("year") String year, @PathVariable("month") String month, @PathVariable("name") String name){
        videoService.deleteFromS3(year + "/" + month + "/" + name);
        return R.ok();

    }

}
