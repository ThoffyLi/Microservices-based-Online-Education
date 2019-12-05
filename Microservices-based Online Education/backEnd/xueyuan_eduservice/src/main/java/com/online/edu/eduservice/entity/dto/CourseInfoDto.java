package com.online.edu.eduservice.entity.dto;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import lombok.Data;

/**
 * @author Thoffy
 * @date 2019/11/20 22:24
 */
@Data
public class CourseInfoDto {

    @JsonSerialize(using = ToStringSerializer.class)
    private Long id;
    private String title;
    private String price;
    private String description;
    private String teacherName;
    private String levelOne;
    private String levelTwo;

}
