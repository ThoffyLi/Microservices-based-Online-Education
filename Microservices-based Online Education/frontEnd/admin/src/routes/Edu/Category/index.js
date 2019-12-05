import React, { Component } from "react";
import { Tree, Button, Message, MessageBox } from "element-react";
import { category_endPoint, category_homeLink } from "../../../constants";
import "element-theme-default";
import axios from "axios";
import { message } from "antd";

class Category extends Component {
  state = {
    tData: [],
    options: {
      children: "children",
      title: "label"
    }
  };

  async componentDidMount() {
    const { data } = await axios.get(category_endPoint);
    this.state.tData = data.data.OneSubjectDto;
    this.setState({ tData: this.state.tData });
  }

  append = async data => {
    console.log(data);
    MessageBox.prompt("Please Input Subject Name", "Add New Subject", {
      inputPattern: /.+/,
      inputErrorMessage: "Please Input!"
    })
      .then(async ({ value }) => {
        const newSubject = { title: value, parentId: data.id, children: [] };
        await axios.post(category_endPoint + "/" + "addTwoLevel", newSubject);
        Message({
          type: "success",
          message: "Successfully added:  " + value
        });
        window.location.href = category_homeLink + "/list";
      })
      .catch(() => {
        Message({
          type: "info",
          message: "Canceled"
        });
      });
  };

  remove = async data => {
    const originalData = this.state.tData;
    try {
      this.setState({ tData: this.state.tData });
      await axios.delete(category_endPoint + "/" + data.id);
      window.location.href = category_homeLink + "/list";
      message.success("upload successfully.");
    } catch (ex) {
      message.error("upload failed.");
      this.setState({ tData: originalData });
    }
  };

  onClick() {
    MessageBox.prompt("Please Input Category Name", "Add New Category", {
      inputPattern: /.+/,
      inputErrorMessage: "Please Input!"
    })
      .then(async ({ value }) => {
        // console.log(value);
        const newCategory = { title: value, parentId: "0", children: [] };
        await axios.post(category_endPoint + "/" + "addOneLevel", newCategory);
        Message({
          type: "success",
          message: "Successfully added:  " + value
        });
        window.location.href = category_homeLink + "/list";
      })
      .catch(() => {
        Message({
          type: "info",
          message: "Canceled"
        });
      });
  }

  renderContent(nodeModel, data, store) {
    return (
      <span>
        <span>
          <span>{data.title}</span>
        </span>
        <span style={{ float: "right", marginRight: "20px" }}>
          {data.children ? (
            <span>
              <Button
                size="mini"
                onClick={() => {
                  this.append(data);
                }}
              >
                Append
              </Button>
              <Button size="mini" onClick={() => this.remove(data)}>
                Delete
              </Button>
            </span>
          ) : (
            <span>
              <Button size="mini" onClick={() => this.remove(data)}>
                Delete
              </Button>
            </span>
          )}
        </span>
      </span>
    );
  }

  render() {
    const { tData, options } = this.state;

    return (
      <span>
        <Button onClick={this.onClick}>Append Category</Button>
        <Tree
          data={tData}
          options={options}
          isShowCheckbox={true}
          nodeKey="id"
          defaultExpandAll={true}
          expandOnClickNode={false}
          renderContent={(...args) => this.renderContent(...args)}
        />
      </span>
    );
  }
}

export default Category;
