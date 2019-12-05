import Layout from "../../components/Layout";
import { withRouter } from "next/router";
import axios from "axios";
import { course_front_endPoint } from "../../utils/constants";
import React, { Component } from "react";
import Router from "next/router";

class CourseById extends Component {
  state = {
    courseInfo: JSON.parse(JSON.stringify(this.props)).courseInfo,
    chapterVideoList: JSON.parse(JSON.stringify(this.props)).chapterVideoList
  };

  static async getInitialProps(context) {
    const res = await axios.get(course_front_endPoint + "/" + context.query.id);

    return {
      courseInfo: res.data.data.courseInfo,
      chapterVideoList: res.data.data.chapterVideoList
    };
  }

  gotoPlayer = video => {
    Router.push({
      pathname: "/player/" + video.id,
      id: video.id
    });
  };

  render() {
    return (
      <Layout>
        {console.log(this.state.chapterVideoList)}
        <div id="aCoursesList" className="bg-fa of">
          <section className="container">
            <section className="path-wrap txtOf hLh30">
              <a href="#" title className="c-999 fsize14">
                首页
              </a>
              \
              <a href="#" title className="c-999 fsize14">
                课程列表
              </a>
              \
              <span className="c-333 fsize14">
                {this.state.courseInfo.title}
              </span>
            </section>
            <div>
              <article className="c-v-pic-wrap" style={{ height: "357px" }}>
                <section className="p-h-video-box" id="videoPlay">
                  <img
                    src="/assets/photo/course/1442295581911.jpg"
                    alt={this.state.courseInfo.title}
                    className="dis c-v-pic"
                  />
                </section>
              </article>
              <aside className="c-attr-wrap">
                <section className="ml20 mr15">
                  <h2 className="hLh30 txtOf mt15">
                    <span className="c-fff fsize24">
                      {this.state.courseInfo.title}
                    </span>
                  </h2>
                  <section className="c-attr-jg">
                    <span className="c-fff">价格：</span>
                    <b className="c-yellow" style={{ "font-size": "24px" }}>
                      {"￥" + this.state.courseInfo.price}
                    </b>
                  </section>
                  <section className="c-attr-mt c-attr-undis">
                    <span className="c-fff fsize14">
                      主讲：{this.state.courseInfo.teacherName}{" "}
                      &nbsp;&nbsp;&nbsp;
                    </span>
                  </section>
                  <section className="c-attr-mt of">
                    <span className="ml10 vam">
                      <em className="icon18 scIcon"></em>
                      <a className="c-fff vam" title="收藏" href="#">
                        收藏
                      </a>
                    </span>
                  </section>
                  <section className="c-attr-mt">
                    <a
                      href="#playVideos"
                      title="立即观看"
                      className="comm-btn c-btn-3"
                    >
                      立即观看
                    </a>
                  </section>
                </section>
              </aside>
              <aside className="thr-attr-box">
                <ol className="thr-attr-ol clearfix">
                  <li>
                    <p>&nbsp;</p>
                    <aside>
                      <span className="c-fff f-fM">购买数</span>
                      <br />
                      <h6 className="c-fff f-fM mt10">
                        {this.state.courseInfo.buyCount}
                      </h6>
                    </aside>
                  </li>
                  <li>
                    <p>&nbsp;</p>
                    <aside>
                      <span className="c-fff f-fM">课时数</span>
                      <br />
                      <h6 className="c-fff f-fM mt10">
                        {this.state.courseInfo.lessonNum}
                      </h6>
                    </aside>
                  </li>
                  <li>
                    <p>&nbsp;</p>
                    <aside>
                      <span className="c-fff f-fM">浏览数</span>
                      <br />
                      <h6 className="c-fff f-fM mt10">
                        {this.state.courseInfo.viewCount}
                      </h6>
                    </aside>
                  </li>
                </ol>
              </aside>
              <div className="clear"></div>
            </div>

            <div className="mt20 c-infor-box">
              <article className="fl col-7">
                <section className="mr30">
                  <div className="i-box">
                    <div>
                      <section
                        id="c-i-tabTitle"
                        className="c-infor-tabTitle c-tab-title"
                      >
                        <a name="c-i" className="current" title="课程详情">
                          课程详情
                        </a>
                      </section>
                    </div>
                    <article className="ml10 mr10 pt20">
                      <div>
                        <h6 className="c-i-content c-infor-title">
                          <span>课程介绍</span>
                        </h6>
                        <div className="course-txt-body-wrap">
                          <section className="course-txt-body">
                            <p>{this.state.courseInfo.description}</p>
                          </section>
                        </div>
                      </div>

                      <div className="mt50">
                        <h6 className="c-g-content c-infor-title">
                          <span>课程大纲</span>
                        </h6>
                        <section className="mt20">
                          <div className="lh-menu-wrap">
                            <menu id="lh-menu" className="lh-menu mt10 mr10">
                              <ul id="playVideos">
                                {this.state.chapterVideoList.map(chapter => (
                                  <li className="lh-menu-stair">
                                    <a
                                      href="javascript: void(0)"
                                      title={chapter.title}
                                      className="current-1"
                                    >
                                      <em className="lh-menu-i-1 icon18 mr10"></em>
                                      {chapter.title}
                                    </a>
                                    <ol
                                      className="lh-menu-ol"
                                      style={{ display: "block" }}
                                    >
                                      {chapter.children.map(video => (
                                        <li className="lh-menu-second ml30">
                                          <span>
                                            <a
                                              onClick={() =>
                                                this.gotoPlayer(video)
                                              }
                                              title={video.title}
                                              className="current-1"
                                            >
                                              <em className="lh-menu-i-2 icon16 mr5">
                                                &nbsp;
                                              </em>
                                              {video.title}
                                            </a>
                                          </span>
                                        </li>
                                      ))}
                                    </ol>
                                  </li>
                                ))}
                              </ul>
                            </menu>
                          </div>
                        </section>
                      </div>
                    </article>
                  </div>
                </section>
              </article>
              <aside className="fl col-3">
                <div className="i-box">
                  <div>
                    <section className="c-infor-tabTitle c-tab-title">
                      <a title>主讲讲师</a>
                    </section>
                    <section className="stud-act-list">
                      <ul style={{ height: "auto" }}>
                        <li>
                          <div className="u-face">
                            <a
                              href={
                                "/teacher/" + this.state.courseInfo.teacherId
                              }
                            >
                              <img
                                src={this.state.courseInfo.avatar}
                                width="50"
                                height="50"
                                alt
                              />
                            </a>
                          </div>
                          <section className="hLh30 txtOf">
                            <a
                              className="c-333 fsize16 fl"
                              href={
                                "/teacher/" + this.state.courseInfo.teacherId
                              }
                            >
                              {this.state.courseInfo.teacherName}
                            </a>
                          </section>
                          <section className="hLh20 txtOf">
                            <span className="c-999">
                              {this.state.courseInfo.career}
                            </span>
                          </section>
                        </li>
                      </ul>
                    </section>
                  </div>
                </div>
              </aside>
              <div className="clear"></div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default withRouter(CourseById);
