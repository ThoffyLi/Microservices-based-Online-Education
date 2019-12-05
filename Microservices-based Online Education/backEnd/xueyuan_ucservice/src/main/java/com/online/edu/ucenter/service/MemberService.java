package com.online.edu.ucenter.service;

import com.online.edu.ucenter.entity.Member;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 * 会员表 服务类
 * </p>
 *
 * @author Thoffy
 * @since 2019-11-27
 */
public interface MemberService extends IService<Member> {

    Integer countRegisterNum(String day);
}
