package com.online.edu.MyAWS;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.*;

import java.io.InputStream;

/**
 * @author Thoffy
 * @date 2019/11/18 14:02
 */
public class MyAmazonS3 {

    private AmazonS3 client = null;

    public  AmazonS3 getS3Client(){
        AWSCredentials awsCredentials = new BasicAWSCredentials(Credentials.access_key_id, Credentials.secret_access_key);
        this.client = AmazonS3ClientBuilder.standard().withRegion("us-west-1").withCredentials(new AWSStaticCredentialsProvider(awsCredentials)).build();
        return this.client;
    }

    public PutObjectResult saveFile(String path, String fileName, InputStream inputStream) {

        ObjectMetadata metadata = new ObjectMetadata();

        try{
            PutObjectResult result = this.client.putObject(new PutObjectRequest(path, fileName, inputStream, metadata)
                    .withCannedAcl(CannedAccessControlList.PublicRead));
            return result;
        }catch (AmazonServiceException e){
            throw new IllegalStateException("Fail to store file to s3", e);
        }

    }


    public void deleteFile(String path, String fileName ) {

        ObjectMetadata metadata = new ObjectMetadata();

        try{
             this.client.deleteObject(path,fileName);

        }catch (AmazonServiceException e){
            throw new IllegalStateException("Fail to delete file from s3", e);
        }

    }


}
