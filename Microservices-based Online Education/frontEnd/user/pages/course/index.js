import Layout from "../../components/Layout";
import axios from "axios";

import {
  course_front_endPoint,
  defaultPage,
  limit
} from "../../utils/constants";
import React, { Component } from "react";
import { Button } from "antd";

class Course extends Component {
  state = {
    data: JSON.parse(JSON.stringify(this.props))
  };

  static async getInitialProps() {
    const res = await axios.get(
      course_front_endPoint + "/" + defaultPage + "/" + limit
    );
    return {
      courses: res.data.data.items,
      hasPrevious: res.data.data.hasPrevious,
      hasNext: res.data.data.hasNext,
      current: res.data.data.current,
      size: res.data.data.size,
      total: res.data.data.total,
      pages: res.data.data.pages
    };
  }

  gotoPage = async page => {
    const res = await axios.get(
      course_front_endPoint + "/" + page + "/" + limit
    );
    this.state.data.courses = res.data.data.items;
    this.state.data.hasPrevious = res.data.data.hasPrevious;
    this.state.data.hasNext = res.data.data.hasNext;
    this.state.data.current = res.data.data.current;
    this.state.data.size = res.data.data.size;
    this.state.data.total = res.data.data.total;
    this.state.data.pages = res.data.data.pages;
    this.setState({ data: this.state.data });
  };

  render() {
    var pagesArr = [];
    for (let i = 1; i <= this.state.data.pages; i++) {
      pagesArr.push(i);
    }
    return (
      <Layout>
        <div id="aCoursesList" className="bg-fa of">
          <section className="container">
            <header className="comm-title">
              <h2 className="fl tac">
                <span className="c-333">全部课程</span>
              </h2>
            </header>
            <section className="c-sort-box">
              <section className="c-s-dl">
                <dl>
                  <dt>
                    <span className="c-999 fsize14">课程类别</span>
                  </dt>
                  <dd className="c-s-dl-li">
                    <ul className="clearfix">
                      <li>
                        <a title="全部" href="#">
                          全部
                        </a>
                      </li>
                      <li>
                        <a title="数据库" href="#">
                          数据库
                        </a>
                      </li>
                      <li className="current">
                        <a title="外语考试" href="#">
                          外语考试
                        </a>
                      </li>
                      <li>
                        <a title="教师资格证" href="#">
                          教师资格证
                        </a>
                      </li>
                      <li>
                        <a title="公务员" href="#">
                          公务员
                        </a>
                      </li>
                      <li>
                        <a title="移动开发" href="#">
                          移动开发
                        </a>
                      </li>
                      <li>
                        <a title="操作系统" href="#">
                          操作系统
                        </a>
                      </li>
                    </ul>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <span className="c-999 fsize14"></span>
                  </dt>
                  <dd className="c-s-dl-li">
                    <ul className="clearfix">
                      <li>
                        <a title="职称英语" href="#">
                          职称英语
                        </a>
                      </li>
                      <li>
                        <a title="英语四级" href="#">
                          英语四级
                        </a>
                      </li>
                      <li>
                        <a title="英语六级" href="#">
                          英语六级
                        </a>
                      </li>
                    </ul>
                  </dd>
                </dl>
                <div className="clear"></div>
              </section>
              <div className="js-wrap">
                <section className="fr">
                  <span className="c-ccc">
                    <i className="c-master f-fM">1</i>/
                    <i className="c-666 f-fM">1</i>
                  </span>
                </section>
                <section>
                  <ol className="js-tap clearfix">
                    <li>
                      <a title="关注度" href="#">
                        关注度
                      </a>
                    </li>
                    <li>
                      <a title="最新" href="#">
                        最新
                      </a>
                    </li>
                    <li className="current bg-orange">
                      <a title="价格" href="#">
                        价格&nbsp;
                        <span>↓</span>
                      </a>
                    </li>
                  </ol>
                </section>
              </div>
              <div className="mt40">
                {this.state.data.courses.length === 0 ? (
                  <section className="no-data-wrap">
                    <em className="icon30 no-data-ico">&nbsp;</em>
                    <span className="c-666 fsize14 ml10 vam">
                      没有相关数据，小编正在努力整理中...
                    </span>
                  </section>
                ) : (
                  <article className="comm-course-list">
                    <ul className="of" id="bna">
                      {this.state.data.courses.map(course => (
                        <li>
                          <div className="cc-l-wrap">
                            <section className="course-img">
                              <img
                                src="/assets/photo/course/1442295592705.jpg"
                                className="img-responsive"
                                alt={course.title}
                              />
                              <div className="cc-mask">
                                <a
                                  href={"/course/" + course.id}
                                  title="开始学习"
                                  className="comm-btn c-btn-1"
                                >
                                  开始学习
                                </a>
                              </div>
                            </section>
                            <h3 className="hLh30 txtOf mt10">
                              <a
                                href={"/course/" + course.id}
                                title={course.title}
                                className="course-title fsize18 c-333"
                              >
                                {course.title}
                              </a>
                            </h3>
                            <section className="mt10 hLh20 of">
                              {course.price === 0 ? (
                                <span className="fr jgTag bg-green">
                                  <i className="c-fff fsize12 f-fA">免费</i>
                                </span>
                              ) : (
                                <span className="fr jgTag bg-yellow">
                                  <i className="c-fff fsize12 f-fA">
                                    {course.price + " 元"}
                                  </i>
                                </span>
                              )}

                              <span className="fl jgAttr c-ccc f-fA">
                                <i className="c-999 f-fA">
                                  {course.viewCount + " 学习"}
                                </i>
                                |
                              </span>
                            </section>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="clear"></div>
                  </article>
                )}
              </div>

              <div>
                <div className="paging">
                  <Button
                    ghost={true}
                    disabled={!this.state.data.hasPrevious}
                    onClick={() => {
                      this.gotoPage(1);
                    }}
                  >
                    首
                  </Button>
                  <Button
                    disabled={!this.state.data.hasPrevious}
                    onClick={() => {
                      this.gotoPage(this.state.data.current - 1);
                    }}
                  >
                    &lt;
                  </Button>
                  {pagesArr.map(page => (
                    <Button
                      disabled={page === this.state.data.current}
                      onClick={() => {
                        this.gotoPage(page);
                      }}
                    >
                      {page}
                    </Button>
                  ))}
                  <Button
                    disabled={!this.state.data.hasNext}
                    onClick={() => {
                      this.gotoPage(this.state.data.current + 1);
                    }}
                  >
                    &gt;
                  </Button>
                  <Button
                    disabled={!this.state.data.hasNext}
                    onClick={() => {
                      this.gotoPage(this.state.data.pages);
                    }}
                  >
                    末
                  </Button>
                  <div className="clear"></div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Course;
