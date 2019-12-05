import React, { Component } from "react";
import { Steps, Button, Form, Input, Select, InputNumber } from "element-react";
import { message } from "antd";
import "element-theme-default";
import { withRouter } from "react-router-dom";
import axios from "axios";
import {
  teacher_endPoint,
  course_endPoint,
  category_endPoint
} from "../../../constants";

const defaultForm = {
  //TODO 数据回显
  course_name: "",
  teacher: "",
  lectureNum: 30,
  price: 300,
  description: "",
  subjectId: "",
  subjectParentId: ""
};

class PublishCourse extends Component {
  state = {
    active: 1,
    form: {
      course_name: "",
      teacher: "",
      lectureNum: 30,
      price: 300,
      description: "",
      subjectId: "",
      subjectParentId: ""
    },
    teacherList: [],
    oneLevelSubjectList: [],
    twoLevelSubjectList: []
  };

  async componentDidMount() {
    if (this.props.match.params && this.props.match.params.id) {
      //需要回显
      console.log(this.props.match.params.id);
      const course_data = await axios.get(
        course_endPoint + "/getCourseInfo/" + this.props.match.params.id
      );

      const courseInfoForm = course_data.data.data.CourseInfoForm;

      this.state.form = {
        course_name: courseInfoForm.title,
        teacher: courseInfoForm.teacherId,
        lectureNum: courseInfoForm.lessonNum,
        price: courseInfoForm.price,
        description: courseInfoForm.description,
        subjectId: courseInfoForm.subjectId,
        subjectParentId: courseInfoForm.subjectParentId
      };
    } else {
      this.state.form = defaultForm;
    }
    const teacher_data = await axios.get(teacher_endPoint);
    const category_data = await axios.get(category_endPoint);
    this.state.teacherList = teacher_data.data.data.items;
    this.state.oneLevelSubjectList = category_data.data.data.OneSubjectDto;
    // console.log(this.state.oneLevelSubjectList);
    this.setState({ teacherList: this.state.teacherList });
    this.setState({ oneLevelSubjectList: this.state.oneLevelSubjectList });
  }

  next = async () => {
    try {
      const courseInfoForm = {
        teacherId: this.state.form.teacher,
        title: this.state.form.course_name,
        price: this.state.form.price,
        lessonNum: this.state.form.lectureNum,
        description: this.state.form.description,
        subjectId: this.state.form.subjectId,
        subjectParentId: this.state.form.subjectParentId
      };

      const response = await axios.post(course_endPoint, courseInfoForm);
      const courseId = response.data.data.courseId;
      message.success("upload Successfully.");
      let active = this.state.active + 1;
      if (active > 3) {
        active = 0;
      }
      this.setState({ active });
      this.props.history.push("/course/syllabus/" + courseId);
    } catch (ex) {
      message.error("upload Failed.");
    }
  };

  updateCourse = async () => {
    try {
      const courseInfoForm = {
        id: this.props.match.params.id,
        teacherId: this.state.form.teacher,
        title: this.state.form.course_name,
        price: this.state.form.price,
        lessonNum: this.state.form.lectureNum,
        description: this.state.form.description,
        subjectId: this.state.form.subjectId,
        subjectId: this.state.form.subjectId
      };

      await axios.post(course_endPoint + "/updateCourseInfo", courseInfoForm);
      message.success("upload Successfully.");
      let active = this.state.active + 1;
      if (active > 3) {
        active = 0;
      }
      this.setState({ active });
      this.props.history.push("/course/syllabus/" + this.props.match.params.id);
    } catch (ex) {
      message.error("upload Failed.");
    }
  };

  onChange(key, value) {
    this.state.form[key] = value;
    this.forceUpdate();
  }

  onChangeDto1(key, value) {
    this.state.form[key] = value;
    this.forceUpdate();
    this.state.twoLevelSubjectList = this.state.oneLevelSubjectList.filter(
      dto1 => dto1.id === value
    )[0].children;
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    //   console.log(this.props.match.params);

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

        <Form
          model={this.state.form}
          labelWidth="80"
          onSubmit={this.onSubmit.bind(this)}
        >
          <Form.Item label="Course Name" labelWidth="80px">
            <Input
              value={this.state.form.course_name}
              onChange={this.onChange.bind(this, "course_name")}
            ></Input>
          </Form.Item>
          <Form.Item label="Teacher" labelWidth="80px">
            <Select
              value={this.state.form.teacher}
              placeholder="Select Teacher"
              onChange={this.onChange.bind(this, "teacher")}
            >
              {this.state.teacherList.map(teacher => (
                <Select.Option
                  label={teacher.name}
                  value={teacher.id}
                ></Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Category" labelWidth="80px">
            <Select
              value={this.state.form.subjectId}
              placeholder="Select Category"
              onChange={this.onChangeDto1.bind(this, "subjectId")}
            >
              {this.state.oneLevelSubjectList.map(oneDto => (
                <Select.Option
                  label={oneDto.title}
                  value={oneDto.id}
                ></Select.Option>
              ))}
            </Select>
            <Select
              value={this.state.form.subjectParentId}
              placeholder="Select Subject"
              onChange={this.onChange.bind(this, "subjectParentId")}
            >
              {this.state.twoLevelSubjectList.map(twoDto => (
                <Select.Option
                  label={twoDto.title}
                  value={twoDto.id}
                ></Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Total Lectures" labelWidth="80px">
            <InputNumber
              value={this.state.form.lectureNum}
              defaultValue={30}
              onChange={this.onChange.bind(this, "lectureNum")}
              step="2"
            ></InputNumber>
          </Form.Item>

          <Form.Item label="Price" labelWidth="80px">
            <InputNumber
              value={this.state.form.price}
              defaultValue={300}
              onChange={this.onChange.bind(this, "price")}
              step="20"
            ></InputNumber>
          </Form.Item>
          <Form.Item label="Description">
            <Input
              type="textarea"
              value={this.state.form.description}
              onChange={this.onChange.bind(this, "description")}
            ></Input>
          </Form.Item>
        </Form>
        <div align="center">
          <Button
            onClick={() => {
              if (this.props.match.params && this.props.match.params.id) {
                this.updateCourse();
              } else {
                this.next();
              }
            }}
          >
            Save and Next
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(PublishCourse);
