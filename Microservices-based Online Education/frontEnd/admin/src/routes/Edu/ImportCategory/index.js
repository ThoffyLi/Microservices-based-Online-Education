import React, { Component } from "react";
import { category_endPoint, category_homeLink } from "../../../constants";
import { Upload, Button, Icon, message } from "antd";
import axios from "axios";

class ImportCategory extends Component {
  state = {
    fileList: [],
    uploading: false
  };

  handleUpload = async () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append("file", file);
    });

    this.setState({
      uploading: true
    });

    // You can use any AJAX library you like
    try {
      await axios.post(category_endPoint + "/import", formData);
      message.success("upload successfully.");
      this.setState({
        fileList: [],
        uploading: false
      });
      window.location.href = category_homeLink + "/list";
    } catch (ex) {
      this.setState({
        uploading: false
      });
      message.error("upload failed.");
    }
  };

  render() {
    const { uploading, fileList } = this.state;
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file]
        }));
        return false;
      },
      fileList
    };

    return (
      <div>
        <Upload name="file" {...props}>
          <Button>
            <Icon type="upload" /> Select File
          </Button>
          <h2>Please upload an Excel form (xls)</h2>
        </Upload>
        <Button
          type="primary"
          onClick={this.handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? "Uploading" : "Start Upload"}
        </Button>
      </div>
    );
  }
}

export default ImportCategory;
