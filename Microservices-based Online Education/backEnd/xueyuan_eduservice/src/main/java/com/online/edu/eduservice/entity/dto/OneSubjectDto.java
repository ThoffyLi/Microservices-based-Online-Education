package com.online.edu.eduservice.entity.dto;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import lombok.Data;
import java.util.ArrayList;
import java.util.List;


/**
 * @author Thoffy
 * @date 2019/11/18 23:19
 */

@Data
public class OneSubjectDto {

    @JsonSerialize(using = ToStringSerializer.class)
    private Long id;

    private String title;
    private List<TwoSubjectDto> children = new ArrayList<>();
}
