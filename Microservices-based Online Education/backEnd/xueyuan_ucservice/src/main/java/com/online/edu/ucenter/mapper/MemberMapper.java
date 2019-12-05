package com.online.edu.ucenter.mapper;

import com.online.edu.ucenter.entity.Member;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

/**
 * <p>
 * 会员表 Mapper 接口
 * </p>
 *
 * @author Thoffy
 * @since 2019-11-27
 */
public interface MemberMapper extends BaseMapper<Member> {

    Integer countRegisterNum(String day);

}
