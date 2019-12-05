import React, { Component } from "react";
import {
  Steps,
  Button,
  Message,
  MessageBox,
  Upload,
  Dialog,
  Input,
  Form
} from "element-react";
import "element-theme-default";
import { withRouter } from "react-router-dom";
import axios from "axios";
import {
  chapter_endPoint,
  homeLink,
  video_endPoint,
  videoService_endPoint
} from "../../../../constants";
import { message } from "antd";
import "./chapter.css";

class Syllabus extends Component {
  state = {
    active: 2,
    courseId: this.props.match.params.id,
    pathName: this.props.location.pathname,
    chapterList: [],
    videoPath: "",
    videoUrl: "empty",
    videoName: "",
    dialogVisible: false,
    form: {
      videoName: ""
    },
    fileList: [],
    key: 0,
    chapterId: 0,
    currentDialogTitle: "",
    isEdit: false,
    currentVideoId: 0
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        chapter_endPoint + "/getChapterVideoList/" + this.state.courseId
      );
      this.state.chapterList = data.data.items;
      this.setState(this.state);
    } catch (ex) {
      message.error("Fail to Load Data");
    }
  }

  ClickAddChapter = () => {
    MessageBox.prompt("Please Input Chapter Name", "Add New Chapter", {
      inputPattern: /.+/,
      inputErrorMessage: "Please Input!"
    })
      .then(async ({ value }) => {
        const newChapter = { title: value, courseId: this.state.courseId };
        await axios.post(chapter_endPoint + "/" + "addChapter", newChapter);
        Message({
          type: "success",
          message: "Successfully added:  " + value
        });
        window.location.href = homeLink + this.state.pathName;
      })
      .catch(() => {
        Message({
          type: "info",
          message: "Canceled"
        });
      });
  };

  EditChapter = async chapterId => {
    const { data } = await axios.get(
      chapter_endPoint + "/getChapterInfo/" + chapterId
    );
    var eduChapter = data.data.eduChapter;
    MessageBox.prompt("Please Input Chapter Name", "Add New Chapter", {
      inputValue: eduChapter.title,
      inputPattern: /.+/,
      inputErrorMessage: "Please Input!"
    })
      .then(async ({ value }) => {
        eduChapter.title = value;
        await axios.post(chapter_endPoint + "/" + "updateChapter", eduChapter);
        Message({
          type: "success",
          message: "Successfully updated:  " + value
        });
        window.location.href = homeLink + this.state.pathName;
      })
      .catch(() => {
        Message({
          type: "info",
          message: "Canceled"
        });
      });
  };

  DeleteChapter = async chapterId => {
    try {
      await axios.delete(chapter_endPoint + "/" + chapterId);
      Message({
        type: "success",
        message: "Delete Successful!"
      });
      window.location.href = homeLink + this.state.pathName;
    } catch (ex) {
      Message({
        type: "info",
        message: "Error!"
      });
    }
  };

  ClickAddVideo = async chapterId => {
    // console.log(chapterId);
    if (!this.state.isEdit) {
      if (this.state.videoUrl == "empty") {
        alert("You must upload a video!");
        return;
      }
      const newVideo = {
        title: this.state.form.videoName,
        courseId: this.state.courseId,
        chapterId: chapterId,
        videoUrl: this.state.videoUrl,
        videoName: this.state.videoName,
        videoPath: this.state.videoPath
      };

      await axios.post(video_endPoint + "/" + "addVideo", newVideo);
      this.setState({ dialogVisible: false });
      window.location.href = homeLink + this.state.pathName;
    } else {
      this.upDateVideo(this.state.currentVideoId);
    }
  };

  EditVideo = async videoId => {
    const { data } = await axios.get(video_endPoint + "/" + videoId);
    var eduVideo = data.data.eduVideo;
    if (eduVideo.videoUrl !== "empty") {
      this.setState({
        videoPath: eduVideo.videoPath,
        key: this.state.key + 1,
        fileList: [{ name: eduVideo.videoName }],
        currentDialogTitle: eduVideo.title,
        form: { videoName: eduVideo.title },
        dialogVisible: true,
        currentVideoId: videoId
      });
    }
  };

  upDateVideo = async videoId => {
    var newVideo = {};
    //keep orginal file, just change title
    if (this.state.videoUrl === "empty") {
      const { data } = await axios.get(video_endPoint + "/" + videoId);
      var eduVideo = data.data.eduVideo;
      newVideo = {
        id: videoId,
        title: this.state.form.videoName,
        videoUrl: eduVideo.videoUrl,
        videoName: eduVideo.videoName,
        videoPath: eduVideo.videoPath
      };
    } else {
      // upload new file
      newVideo = {
        id: videoId,
        title: this.state.form.videoName,
        videoUrl: this.state.videoUrl,
        videoName: this.state.videoName,
        videoPath: this.state.videoPath
      };
    }

    await axios.post(video_endPoint + "/updateVideo", newVideo);
    this.setState({ dialogVisible: false });
    window.location.href = homeLink + this.state.pathName;
  };

  uploadVideo = async file => {
    var formData = new FormData();

    formData.append("file", file.file);
    const { data } = await axios.post(
      videoService_endPoint + "/upload",
      formData
    );

    this.setState({
      videoPath: data.data.videoPath,
      videoUrl: data.data.videoUrl,
      videoName: file.file.name
    });
    // console.log(this.state.videoPath);
    // console.log(this.state.videoUrl);
    // console.log(this.state.videoName);
    message.success("Upload Success!");
  };

  DeleteVideo = async videoId => {
    try {
      // delete video file in S3
      const { data } = await axios.get(video_endPoint + "/" + videoId);
      const pathName = data.data.eduVideo.videoPath;
      const year = pathName.split("/")[0];
      const month = pathName.split("/")[1];
      const name = pathName.split("/")[2];

      // const videoDto = { pathName: pathName };
      await axios.delete(
        videoService_endPoint + "/delete/" + year + "/" + month + "/" + name
      );
      this.setState({ videoPath: "", videoUrl: "empty" });

      // delete video from db
      await axios.delete(video_endPoint + "/" + videoId);
      Message({
        type: "success",
        message: "Delete Successful!"
      });
      window.location.href = homeLink + this.state.pathName;
    } catch (ex) {
      Message({
        type: "info",
        message: "Error!"
      });
    }
  };

  handleRemove = async () => {
    // axios remove from S3
    // console.log(this.state.videoPath);
    const videoDto = { pathName: this.state.videoPath };
    await axios.post(videoService_endPoint + "/delete", videoDto);
    this.setState({ videoPath: "", videoUrl: "empty", fileList: [] });
  };

  onChange(key, value) {
    this.setState({
      form: Object.assign(this.state.form, { [key]: value })
    });
    this.forceUpdate();
  }

  previous() {
    this.props.history.push("/course/publishcourse/" + this.state.courseId);
  }

  next() {
    this.props.history.push("/course/publish/" + this.state.courseId);
  }

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
        <div>
          <Button type="primary" onClick={this.ClickAddChapter}>
            Add Chapter
          </Button>
          <ul className="chapterList">
            {this.state.chapterList.map(chapter => (
              <li key={chapter.id}>
                <p>
                  {chapter.title}
                  <span className="acts">
                    <Button
                      type="text"
                      onClick={() => {
                        this.setState({
                          dialogVisible: true,
                          chapterId: chapter.id,
                          isEdit: false
                        });
                      }}
                    >
                      Add Episode
                    </Button>
                    <Button
                      type="text"
                      onClick={() => {
                        this.EditChapter(chapter.id);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      type="text"
                      onClick={() => {
                        this.DeleteChapter(chapter.id);
                      }}
                    >
                      Delete
                    </Button>
                    <Dialog
                      key={this.state.key}
                      modal={false}
                      title="Add New Episode"
                      size="tiny"
                      visible={this.state.dialogVisible}
                      onCancel={() => {
                        this.setState({ dialogVisible: false });
                      }}
                      lockScroll={true}
                    >
                      <Dialog.Body>
                        <Form model={this.state.form}>
                          <Form.Item>
                            <Input
                              placeholder="New Video Name"
                              onChange={this.onChange.bind(this, "videoName")}
                              value={this.state.form.videoName}
                            ></Input>
                          </Form.Item>
                          <Form.Item>
                            <Upload
                              className="upload-demo"
                              httpRequest={file => {
                                this.uploadVideo(file);
                              }}
                              onRemove={file => this.handleRemove(file)}
                              fileList={this.state.fileList}
                              limit={1}
                              onExceed={() => {
                                Message.warning(`Only one video allowed!`);
                              }}
                              tip={
                                <div className="el-upload__tip">
                                  Video Size must be less than 50MB
                                </div>
                              }
                            >
                              <Button size="small" type="primary">
                                Upload
                              </Button>
                            </Upload>
                          </Form.Item>
                        </Form>
                      </Dialog.Body>
                      <Dialog.Footer className="dialog-footer">
                        <Button
                          onClick={() =>
                            this.setState({ dialogVisible: false })
                          }
                        >
                          Cancel
                        </Button>
                        <Button
                          type="primary"
                          onClick={() => {
                            this.ClickAddVideo(this.state.chapterId);
                          }}
                        >
                          Add
                        </Button>
                      </Dialog.Footer>
                    </Dialog>
                  </span>
                </p>
                <ul className="chanpterList videoList">
                  {chapter.children.map(video => (
                    <li key={video.id}>
                      <p>
                        {video.title}
                        <span className="acts">
                          <Button
                            type="text"
                            onClick={() => {
                              this.setState({ isEdit: true });
                              this.EditVideo(video.id);
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            type="text"
                            onClick={() => {
                              this.DeleteVideo(video.id);
                            }}
                          >
                            Delete
                          </Button>
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div align="center">
          <Button onClick={() => this.previous()}>Previous</Button>
          <Button type="primary" onClick={() => this.next()}>
            Next
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Syllabus);
