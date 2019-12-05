package com.online.edu.eduservice.entity.dto;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import lombok.Data;

/**
 * @author Thoffy
 * @date 2019/11/20 11:45
 */
@Data
public class EduVideoDto {

    @JsonSerialize(using = ToStringSerializer.class)
    private Long id;
    private String title;
    private String videoUrl;

}
