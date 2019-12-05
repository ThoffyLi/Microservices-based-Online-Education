import React, { Component } from "react";
import { Form, Row, Col, Input, Button, Icon, Select } from "antd";

class TeacherConditionFilter extends Component {
  // To generate mock Form.Item
  getFields() {
    const { getFieldDecorator } = this.props.form;
    const children = [];
    children.push(
      <Col span={5} key={1733}>
        <h2 style={{ margin: 10 }}>Search By Title</h2>
        <Select
          showSearch
          style={{ width: 170, margin: 1, padding: 1 }}
          placeholder="Select a title"
          optionFilterProp="children"
          onChange={this.props.onSelect}
        >
          <Select.Option value="All">All</Select.Option>
          <Select.Option value="Senior Lecturer">Senior Lecturer</Select.Option>
          <Select.Option value="Lecturer">Lecturer</Select.Option>
          <Select.Option value="Junior Lecturer">Junior Lecturer</Select.Option>
        </Select>
      </Col>
    );
    var i = 1733;
    children.push(
      <Col span={5} key={i++ + 1} style="block">
        <Form.Item label={`Search By Teacher Name`}>
          {getFieldDecorator(`teacherName`)(
            <Input placeholder="Seach by name" />
          )}
        </Form.Item>
      </Col>
    );

    return children;
  }

  handleReset = () => {
    this.props.form.resetFields();
    this.props.refresh();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  getTeacherName = () => {
    const name = this.props.form.getFieldsValue().teacherName;
    return name;
  };

  render() {
    return (
      <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
        <Row gutter={24}>{this.getFields()}</Row>
        <Row>
          <Col span={24} key={22} style={{ textAlign: "right" }}>
            <Button type="primary" onClick={this.props.refresh}>
              Search
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Clear
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default TeacherConditionFilter;
