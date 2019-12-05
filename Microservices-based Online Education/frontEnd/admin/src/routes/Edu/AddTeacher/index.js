import React from "react";
import {
  Card,
  Cascader,
  Form,
  Checkbox,
  Input,
  Button,
  message,
  BackTop
} from "antd";
import axios from "axios";
import {
  teacher_homeLink,
  teacher_endPoint,
  s3_endPoint
} from "../../../constants";
import CustomBreadcrumb from "../../../components/CustomBreadcrumb/index";
import AddAvatar from "../AddAvatar/index";
const FormItem = Form.Item;

const options = [
  {
    label: "Senior Lecturer",
    value: "Senior Lecturer"
  },
  {
    label: "Lecturer",
    value: "Lecturer"
  },
  {
    label: "Junior Lecturer",
    value: "Junior Lecturer"
  }
];

@Form.create()
class AddTeacher extends React.Component {
  state = {
    data: [],
    file: null,
    avatarUrl: null
  };
  timer = 0;

  getAvatarFile = file => {
    this.state.file = file;
  };

  AvatarUploadRequest = async () => {
    const formData = new FormData();
    formData.append("file", this.state.file);

    const response = await axios.post(s3_endPoint + "/avatar", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    this.state.avatarUrl = response.data.data.imgurl;
    return response.data.data.imgurl;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (err) {
        message.warning("Please input these fields!");
      } else {
        const { data } = await axios.get(teacher_endPoint);

        console.log(data);
        this.state.data = data.data.items;
        var originalData = data.data.items;
        const currentTime = new Date()
          .toLocaleString()
          .replace(new RegExp("/", "gm"), "-")
          .replace(new RegExp("[上下午]", "gm"), "");
        const newData = {
          name: values.name,
          intro: values.title[0],
          career: values.intro,
          gmtCreate: currentTime,
          gmtModified: currentTime,
          avatar: this.state.avatarUrl
        };

        console.log(this.state.data);
        this.state.data = [...this.state.data, newData];
        this.setState({ data: this.state.data });

        try {
          await axios.post(teacher_endPoint + "/" + "addTeacher/", newData);
        } catch (ex) {
          alert("Add Failed!");
          this.setState({ data: originalData });
        }
        message.success("Submit successfully!");
        window.location.href = teacher_homeLink + "/list";
      }
    });
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      }
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 12,
          offset: 4
        }
      }
    };

    return (
      <div>
        <CustomBreadcrumb arr={["Teacher Management", "Add Teacher"]} />

        <Card bordered={false} title="Add Teacher">
          <Form
            layout="horizontal"
            style={{ width: "70%", margin: "0 auto" }}
            onSubmit={this.handleSubmit}
          >
            <FormItem label="Name" {...formItemLayout}>
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "Please Input Name!"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem label="Intro" {...formItemLayout}>
              {getFieldDecorator(
                "intro",
                {}
              )(<Input.TextArea rows={6} autosize={true} />)}
            </FormItem>

            <FormItem label="Title" {...formItemLayout} required>
              {getFieldDecorator("title", {
                rules: [
                  {
                    type: "array",
                    required: true,
                    message: "Select a title"
                  }
                ]
              })(
                <Cascader
                  options={options}
                  expandTrigger="hover"
                  placeholder=""
                />
              )}
            </FormItem>
            <FormItem label="Avatar" {...formItemLayout}>
              {getFieldDecorator("avatar")}
              <AddAvatar
                AvatarUploadRequest={this.AvatarUploadRequest}
                getAvatarFile={this.getAvatarFile.bind(this)}
              />
            </FormItem>

            <FormItem {...tailFormItemLayout}>
              {getFieldDecorator("agreement", {
                valuePropName: "checked"
              })(
                <Checkbox>
                  I have read the <a href="http://www.google.com">agreement</a>
                </Checkbox>
              )}
            </FormItem>
            <FormItem style={{ textAlign: "center" }} {...tailFormItemLayout}>
              <Button
                type="primary"
                htmlType="submit"
                disabled={!getFieldValue("agreement")}
              >
                Add
              </Button>
            </FormItem>
          </Form>
        </Card>
        <BackTop visibilityHeight={200} style={{ right: 50 }} />
      </div>
    );
  }
}

export default AddTeacher;
