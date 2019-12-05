package com.online.edu.videoservice.service;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author Thoffy
 * @date 2019/11/21 14:36
 */
public interface VideoService {


    String uploadVideoS3(MultipartFile file);

    void deleteFromS3(String file_pathName);

    String toUrl(String videoPath) ;



}
