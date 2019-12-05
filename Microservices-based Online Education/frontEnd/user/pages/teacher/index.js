import Layout from "../../components/Layout";
import axios from "axios";
import { PageStyle } from "../../components/PageStyle";
import {
  teacher_front_endPoint,
  defaultPage,
  limit
} from "../../utils/constants";
import React, { Component } from "react";
import { Button } from "antd";

class Teacher extends Component {
  state = {
    data: JSON.parse(JSON.stringify(this.props))
  };

  static async getInitialProps() {
    const res = await axios.get(
      teacher_front_endPoint + "/" + defaultPage + "/" + limit
    );
    return {
      teachers: res.data.data.items,
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
      teacher_front_endPoint + "/" + page + "/" + limit
    );
    this.state.data.teachers = res.data.data.items;
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
      <div>
        <Layout>
          <div id="aCoursesList" className="bg-fa of">
            <section className="container">
              <header className="comm-title all-teacher-title">
                <h2 className="fl tac">
                  <span className="c-333">全部讲师</span>
                </h2>
                <section className="c-tab-title">
                  <a id="subjectAll" title="全部" href="#">
                    全部
                  </a>
                </section>
              </header>
              <section className="c-sort-box unBr">
                <div>
                  {this.state.data.teachers.length === 0 ? (
                    <section className="no-data-wrap">
                      <em className="icon30 no-data-ico">&nbsp;</em>
                      <span className="c-666 fsize14 ml10 vam">
                        No data available now...
                      </span>
                    </section>
                  ) : (
                    <article className="i-teacher-list">
                      <ul className="of">
                        {this.state.data.teachers.map(teacher => (
                          <li>
                            <section className="i-teach-wrap">
                              <div className="i-teach-pic">
                                <a
                                  href={"/teacher/" + teacher.id}
                                  title={teacher.name}
                                  target="_blank"
                                >
                                  <img src={teacher.avatar} />
                                </a>
                              </div>
                              <div className="mt10 hLh30 txtOf tac">
                                <a
                                  href={"/teacher/" + teacher.id}
                                  title={teacher.name}
                                  target="_blank"
                                  className="fsize18 c-666"
                                >
                                  {teacher.name}
                                </a>
                              </div>
                              <div className="hLh30 txtOf tac">
                                <span className="fsize14 c-999">
                                  {teacher.career}
                                </span>
                              </div>
                              <div className="mt15 i-q-txt">
                                <p className="c-999 f-fA">{teacher.intro}</p>
                              </div>
                            </section>
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
        <PageStyle />
      </div>
    );
  }
}

// Teacher.getInitialProps = async ({ req }) => {
//   const { data } = await axios.get("http://localhost:9001/eduservice/teacher");
//   console.log(data);
// };

export default Teacher;
