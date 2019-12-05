import React from "react";
import Head from "next/head";
import Link from "next/link";
import { PageStyle } from "../components/PageStyle";

const Layout = ({ children }) => (
  <div>
    <div className="in-wrap">
      <Head id="header">
        <section className="container">
          <h1 id="logo">
            <a href="#" title="谷粒学院">
              <img src="/assets/img/logo.png" width="100%" alt="谷粒学院" />
            </a>
          </h1>

          <div className="h-r-nsl">
            <ul className="nav">
              <li>
                <Link href="/">
                  <a>首页</a>
                </Link>
              </li>
              <li>
                <Link href="/course">
                  <a>课程</a>
                </Link>
              </li>

              <li>
                <Link href="/teacher">
                  <a>名师</a>
                </Link>
              </li>

              <li>
                {" "}
                <Link href="/article">
                  <a>文章</a>
                </Link>
              </li>

              <li>
                {" "}
                <Link href="/qa">
                  <a>问答</a>
                </Link>
              </li>
            </ul>

            <ul className="h-r-login">
              <li id="no-login">
                <a href="/sing_in" title="登录">
                  <em className="icon18 login-icon">&nbsp;</em>
                  <span className="vam ml5">登录</span>
                </a>
                |
                <a href="/sign_up" title="注册">
                  <span className="vam ml5">注册</span>
                </a>
              </li>

              <li className="mr10 undis" id="is-login-one">
                <a href="#" title="消息" id="headerMsgCountId">
                  <em className="icon18 news-icon">&nbsp;</em>
                </a>

                <q className="red-point" style={{ display: "none" }}>
                  &nbsp;
                </q>
              </li>

              <li className="h-r-user undis" id="is-login-two">
                <a href="#" title>
                  <img
                    src="/assets/img/avatar-boy.gif"
                    width="30"
                    height="30"
                    className="vam picImg"
                    alt="true"
                  />

                  <span className="vam disIb" id="userName"></span>
                </a>

                <a
                  href="javascript:void(0)"
                  title="退出"
                  onclick="exit();"
                  className="ml5"
                >
                  退出
                </a>
              </li>
            </ul>

            <aside className="h-r-search">
              <form action="#" method="post">
                <label className="h-r-s-box">
                  <input
                    type="text"
                    placeholder="输入你想学的课程"
                    name="queryCourse.courseName"
                    value
                  />

                  <button type="submit" className="s-btn">
                    <em className="icon18">&nbsp;</em>
                  </button>
                </label>
              </form>
            </aside>
          </div>

          <aside className="mw-nav-btn">
            <div className="mw-nav-icon"></div>
          </aside>

          <div className="clear"></div>
        </section>
      </Head>

      {children}

      <footer id="footer">
        <section className="container">
          <div>
            <h4 className="hLh30">
              <span className="fsize18 f-fM c-999">友情链接</span>
            </h4>

            <ul className="of flink-list">
              <li>
                <a
                  href="http://www.atguigu.com/"
                  title="尚硅谷"
                  target="_blank"
                >
                  尚硅谷
                </a>
              </li>
            </ul>

            <div className="clear"></div>
          </div>

          <div className="b-foot">
            <section className="fl col-7">
              <section className="mr20">
                <section className="b-f-link">
                  <a href="#" title="关于我们" target="_blank">
                    关于我们
                  </a>
                  |
                  <a href="#" title="联系我们" target="_blank">
                    联系我们
                  </a>
                  |
                  <a href="#" title="帮助中心" target="_blank">
                    帮助中心
                  </a>
                  |
                  <a href="#" title="资源下载" target="_blank">
                    资源下载
                  </a>
                  |<span>服务热线：010-56253825(北京) 0755-85293825(深圳)</span>
                  <span>Email：info@atguigu.com</span>
                </section>

                <section className="b-f-link mt10">
                  <span>©2018课程版权均归谷粒学院所有 京ICP备17055252号</span>
                </section>
              </section>
            </section>

            <aside className="fl col-3 tac mt15">
              <section className="gf-tx">
                <span>
                  <img src="/assets/img/wx-icon.png" alt="true" />
                </span>
              </section>

              <section className="gf-tx">
                <span>
                  <img src="/assets/img/wb-icon.png" alt="true" />
                </span>
              </section>
            </aside>

            <div className="clear"></div>
          </div>
        </section>
      </footer>
    </div>

    <PageStyle />
  </div>
);

export default Layout;
