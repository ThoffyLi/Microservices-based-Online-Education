package com.online.edu.ucenter.handler;

import com.baomidou.mybatisplus.core.handlers.MetaObjectHandler;
import org.apache.ibatis.reflection.MetaObject;
import org.springframework.stereotype.Component;

import java.util.Date;

/**
 * @author Thoffy
 * @date 2019/11/4 22:22
 */

// 时间自动填充的handler
// 必须有这个才能@TableField(fill = FieldFill.INSERT)！！！！！

@Component
public class MyObjectMetaHandler implements MetaObjectHandler {

    @Override
    public void insertFill(MetaObject metaObject) {
        this.setFieldValByName("gmtCreate",new Date(), metaObject);
        this.setFieldValByName("gmtModified",new Date(), metaObject);
    }

    @Override
    public void updateFill(MetaObject metaObject) {
        this.setFieldValByName("gmtModified",new Date(), metaObject);
    }
}
