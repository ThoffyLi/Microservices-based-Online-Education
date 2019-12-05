import { withRouter } from "next/router";
import Layout from "../../components/Layout";
import axios from "axios";
import React from "react";
import { teacher_front_endPoint } from "../../utils/constants";

const TeacherById = props => (
  <Layout>
    {console.log(props)}
    <div id="aCoursesList" className="bg-fa of">
      <section className="container">
        <header className="comm-title">
          <h2 className="fl tac">
            <span className="c-333">讲师介绍</span>
          </h2>
        </header>
        <div className="t-infor-wrap">
          <section className="fl t-infor-box c-desc-content">
            <div className="mt20 ml20">
              <section className="t-infor-pic">
                <img src={props.eduTeacher.avatar} />
              </section>
              <h3 className="hLh30">
                <span className="fsize24 c-333">
                  {props.eduTeacher.name}&nbsp;
                </span>
              </h3>
              <section className="mt10">
                <span className="t-tag-bg">{props.eduTeacher.intro}</span>
              </section>
              <section className="t-infor-txt">
                <p className="mt20">{props.eduTeacher.career}</p>
              </section>
              <div className="clear"></div>
            </div>
          </section>
          <div className="clear"></div>
        </div>
        <section className="mt30">
          <div>
            <header className="comm-title all-teacher-title c-course-content">
              <h2 className="fl tac">
                <span className="c-333">主讲课程</span>
              </h2>
              <section className="c-tab-title">
                <a href="javascript: void(0)">&nbsp;</a>
              </section>
            </header>

            {props.courseList.length === 0 ? (
              <section className="no-data-wrap">
                <em className="icon30 no-data-ico">&nbsp;</em>
                <span className="c-666 fsize14 ml10 vam">
                  This teacher has no courses now...
                </span>
              </section>
            ) : (
              <article className="comm-course-list">
                <ul className="of">
                  {props.courseList.map(course => (
                    <li>
                      <div className="cc-l-wrap">
                        <section className="course-img">
                          <img
                            src="/assets/photo/course/1442295455437.jpg"
                            className="img-responsive"
                          />
                          <div className="cc-mask">
                            <a
                              href="#"
                              title="开始学习"
                              target="_blank"
                              className="comm-btn c-btn-1"
                            >
                              开始学习
                            </a>
                          </div>
                        </section>
                        <h3 className="hLh30 txtOf mt10">
                          <a
                            href="#"
                            title={course.title}
                            target="_blank"
                            className="course-title fsize18 c-333"
                          >
                            {course.title}
                          </a>
                        </h3>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="clear"></div>
              </article>
            )}
          </div>
        </section>
      </section>
    </div>
  </Layout>
);

TeacherById.getInitialProps = async function(context) {
  const res = await axios.get(teacher_front_endPoint + "/" + context.query.id);

  return {
    eduTeacher: res.data.data.eduTeacher,
    courseList: res.data.data.courseList
  };
};

export default withRouter(TeacherById);
