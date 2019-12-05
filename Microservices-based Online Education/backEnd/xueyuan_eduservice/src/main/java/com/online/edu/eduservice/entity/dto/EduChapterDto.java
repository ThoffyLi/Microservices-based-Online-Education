package com.online.edu.eduservice.entity.dto;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import com.online.edu.eduservice.entity.EduVideo;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Thoffy
 * @date 2019/11/20 11:45
 */
@Data
public class EduChapterDto {

    @JsonSerialize(using = ToStringSerializer.class)
    private Long id;

    private String title;
    private List<EduVideoDto> children = new ArrayList<>();

}
