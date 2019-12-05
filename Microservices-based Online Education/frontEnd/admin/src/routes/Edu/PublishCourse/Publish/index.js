import React, { Component } from "react";
import { Steps, Button } from "element-react";
import "element-theme-default";
import { withRouter } from "react-router-dom";
import { course_endPoint, course_homeLink } from "../../../../constants";
import axios from "axios";
import "./publish.css";
import { message } from "antd";

class Publish extends Component {
  state = {
    active: 3,
    courseId: this.props.match.params.id,
    courseInfoAll: {
      description: "",
      id: "",
      levelOne: "",
      levelTwo: "",
      price: "",
      teacherName: "",
      title: ""
    }
  };

  async componentDidMount() {
    const { data } = await axios.get(
      course_endPoint + "/getAllCourseInfo/" + this.state.courseId
    );
    this.state.courseInfoAll = data.data.CourseInfo;
    this.setState({ courseInfoAll: this.state.courseInfoAll });
  }

  previous() {
    let active = this.state.active - 1;
    this.setState({ active });
    this.props.history.push("/course/syllabus/" + this.state.courseId);
  }

  publish = async () => {
    try {
      await axios.get(course_endPoint + "/publish/" + this.state.courseId);
      message.success("Course published!");
      window.location.href = course_homeLink + "/list";
    } catch (ex) {
      message.error("Fail to publish!");
    }
  };

  render() {
    return (
      <div>
        <span align="center">
          <Steps space={150} active={this.state.active} finishStatus="success">
            <Steps.Step title="Step 1" description="Basic Info"></Steps.Step>
            <Steps.Step
              title="Step 2"
              description="Create Syllabus"
            ></Steps.Step>
            <Steps.Step
              title="Step 3"
              description="Review and Publish"
            ></Steps.Step>
          </Steps>
        </span>
        <br />
        <div className="ccInfo">
          <div className="main">
            <h2>{this.state.courseInfoAll.title}</h2>
            <p>
              <span>
                Category：{this.state.courseInfoAll.levelOne} —{" "}
                {this.state.courseInfoAll.levelTwo}
              </span>
            </p>
            <p>Teacher：{this.state.courseInfoAll.teacherName}</p>
            <h3>Price: ${this.state.courseInfoAll.price}</h3>
          </div>
        </div>

        <div align="center">
          <Button onClick={() => this.previous()}>Back</Button>
          <Button
            type="primary"
            onClick={() => {
              this.publish();
            }}
          >
            Publish Course
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Publish);
