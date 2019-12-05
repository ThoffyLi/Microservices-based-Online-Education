package com.online.edu.videoservice.service.impl;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectResult;
import com.online.edu.MyAWS.Credentials;
import com.online.edu.MyAWS.MyAmazonS3;
import com.online.edu.videoservice.service.VideoService;
import org.joda.time.DateTime;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.UUID;

/**
 * @author Thoffy
 * @date 2019/11/21 14:36
 */

@Service
public class VideoServiceImpl implements VideoService {

    @Override
    public String uploadVideoS3(MultipartFile file) {

        String path = "";
        try{
            String uuid = UUID.randomUUID().toString();
            String filename = uuid + file.getOriginalFilename() ;

            InputStream in = file.getInputStream();

          // 2019/11/18
              String filePath = new DateTime().toString("yyyy/MM/dd");
              filename = (filePath + filename).replaceAll("[ ]","");

            //client
            MyAmazonS3 s3 = new MyAmazonS3();
            AmazonS3 client = s3.getS3Client();
            PutObjectResult result = s3.saveFile(Credentials.video_bucketName, filename, in);
            path = filename;


        } catch (Exception e){
            e.printStackTrace();

        }
        return path ;
    }

    @Override
    public void deleteFromS3(String file_pathName) {

        MyAmazonS3 s3 = new MyAmazonS3();
        AmazonS3 client = s3.getS3Client();
        client.deleteObject(Credentials.video_bucketName,file_pathName);



    }

    @Override
    public String toUrl(String videoPath){

        try {
            return "https://" + Credentials.video_bucketName + ".s3-us-west-1.amazonaws.com/" + java.net.URLEncoder.encode(videoPath, "UTF-8");
        }catch (Exception e){
            return "Error!";
        }

    }


}
