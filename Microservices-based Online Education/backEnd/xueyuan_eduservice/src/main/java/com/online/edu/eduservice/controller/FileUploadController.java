package com.online.edu.eduservice.controller;
import com.amazonaws.services.s3.AmazonS3;
import com.online.edu.common.R;

import com.online.edu.MyAWS.Credentials;
import com.online.edu.MyAWS.MyAmazonS3;

import org.joda.time.DateTime;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;

import java.util.UUID;


/**
 * @author Thoffy
 * @date 2019/11/16 20:21
 */

// Upload to Amazon S3
@RestController
@RequestMapping("/eduservice/s3")
@CrossOrigin
public class FileUploadController {


    @PostMapping(
            path = "avatar",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE

    )
    public R avatarUpload(@RequestParam("file") MultipartFile file){

        try{
            String uuid = UUID.randomUUID().toString();
            String filename = uuid + file.getOriginalFilename() ;

            InputStream in = file.getInputStream();

            // 2019/11/18
            String filePath = new DateTime().toString("yyyy/MM/dd");
            filename = filePath + filename;


            //client
            MyAmazonS3 s3 = new MyAmazonS3();
            AmazonS3 client = s3.getS3Client();
            s3.saveFile(Credentials.avatar_bucketName, filename, in);


            String path = "https://" + Credentials.avatar_bucketName +  ".s3-us-west-1.amazonaws.com/" + java.net.URLEncoder.encode(filename, "UTF-8");
            return R.ok().data("imgurl",path);


        } catch (Exception e){
            e.printStackTrace();
            return R.error();
        }



    }


}
