import React from "react";
import { teacher_endPoint } from "../../../constants";
import {
  Card,
  Popconfirm,
  Table,
  BackTop,
  Affix,
  Form,
  InputNumber,
  Input
} from "antd";
import axios from "axios";
import TeacherConditionFilter from "../../ConditionFilter/Teacher/index";
import CustomBreadcrumb from "../../../components/CustomBreadcrumb/index";

const data7 = [];
const FormItem = Form.Item;
const EditableContext = React.createContext();
const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);
const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === "number") {
      return <InputNumber />;
    }
    return <Input />;
  };

  render() {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      ...restProps
    } = this.props;
    return (
      <EditableContext.Consumer>
        {form => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    rules: [
                      {
                        required: true,
                        message: `Please Input ${title}!`
                      }
                    ],
                    initialValue: record[dataIndex]
                  })(this.getInput())}
                </FormItem>
              ) : (
                restProps.children
              )}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}

class TableDemo extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    loading: false,

    pagination: {
      pageSize: 8
    },
    // data7: [],
    count: 0,
    data7,
    editingKey: ""
  };

  componentDidMount() {
    this.getTeacherList();
  }

  async getTeacherList() {
    this.setState({
      loading: true
    });
    const { data } = await axios.get(teacher_endPoint);
    this.state.data7 = data.data.items;

    this.state.count = this.state.data7.length;

    const pagination = { ...this.state.pagination };
    pagination.total = 200;
    this.setState({
      loading: false,
      data7: this.state.data7,
      pagination
    });
  }

  columns7 = [
    {
      title: "id",
      dataIndex: "id",
      width: "5%",
      editable: false
    },
    {
      title: "name",
      dataIndex: "name",
      width: "10%",
      editable: true
    },
    {
      title: "title",
      dataIndex: "intro",
      width: "25%",
      editable: true
    },
    {
      title: "career",
      dataIndex: "career",
      width: "25%",
      editable: true
    },
    {
      title: "create modified",
      dataIndex: "gmtModified",
      width: "10%",
      editable: false
    },
    {
      title: "time created",
      dataIndex: "gmtCreate",
      width: "10%",
      editable: false
    },

    {
      title: "operation",
      dataIndex: "operation",
      render: (text, record) => {
        const editable = this.isEditing(record);
        return this.state.data7.length > 1 ? (
          <ul>
            <li>
              {editable ? (
                <span>
                  <EditableContext.Consumer>
                    {form => (
                      <a
                        onClick={() => this.save(form, record.id)}
                        style={{ marginRight: 8 }}
                      >
                        Save
                      </a>
                    )}
                  </EditableContext.Consumer>
                  <Popconfirm
                    title="Sure to cancel?"
                    onConfirm={() => this.cancel(record.id)}
                  >
                    <a>Cancel</a>
                  </Popconfirm>
                </span>
              ) : (
                <a onClick={() => this.edit(record.id)}>Edit</a>
              )}
            </li>
            <li>
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => this.confirmDelete(record.id)}
              >
                <a>Delete </a>
              </Popconfirm>
            </li>
          </ul>
        ) : null;
      }
    }
  ];

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };
  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };
  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null
    });
  };
  setSort = type => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: type
      }
    });
  };

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager
    });
    this.getRemoteData({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters
    });
  };

  confirmDelete = async key => {
    // optimistic updating
    let originalData = this.state.data7;
    const arr = this.state.data7.slice();
    this.setState({
      data7: arr.filter(item => item.id !== key),
      count: this.state.count - 1
    });

    try {
      await axios.delete(teacher_endPoint + "/" + key);
    } catch (ex) {
      alert("Deleting Failed!");
      this.setState({ data7: originalData });
    }
  };

  isEditing = record => {
    return record.id === this.state.editingKey;
  };

  edit(key) {
    this.setState({ editingKey: key });
  }

  save(form, key) {
    form.validateFields(async (error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data7];
      const originalData = newData;
      const index = newData.findIndex(item => key === item.id);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row
        });
        this.setState({ data7: newData, editingKey: "" });
        try {
          await axios.post(
            teacher_endPoint + "/" + "updateTeacher/",
            newData[index]
          );
        } catch (ex) {
          alert("Editing Failed!");
          this.setState({ data7: originalData });
        }
      } else {
        newData.push(data7);
        this.setState({ data7: newData, editingKey: "" });
      }
    });
  }

  cancel = () => {
    this.setState({ editingKey: "" });
  };

  onSelect = title => {
    if (title === "All") {
      return;
    }
    this.state.data7 = this.state.data7.filter(
      teacher => teacher.intro === title
    );
  };

  refresh = async () => {
    if (typeof this.formRef.getTeacherName() != "undefined") {
      var regu = ".?" + this.formRef.getTeacherName() + ".?";
      var re = new RegExp(regu);
      this.state.data7 = this.state.data7.filter(teacher =>
        re.test(teacher.name)
      );
    }

    this.setState({ data7: this.state.data7 });
    let { data } = await axios.get(teacher_endPoint);
    this.state.data7 = data.data.items;
    this.state.count = this.state.data7.length;
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};

    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    };
    const columns9 = this.columns7.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === "age" ? "number" : "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      };
    });
    const WrappedAdvancedSearchForm = Form.create({ name: "advanced_search" })(
      TeacherConditionFilter
    );
    return (
      <div>
        <CustomBreadcrumb arr={["Teacher Management", "Teacher List"]} />

        <Card
          bordered={false}
          title="Teacher List"
          style={{ marginBottom: 10, minHeight: 440 }}
          id="editTable"
        >
          <WrappedAdvancedSearchForm
            dataSource={this.state.data7}
            onSelect={this.onSelect}
            refresh={this.refresh}
            wrappedComponentRef={form => (this.formRef = form)}
          />
          <div className="search-result-list">Search Result List</div>
          <Table
            bordered
            components={components}
            dataSource={this.state.data7}
            columns={columns9}
            style={styles.tableStyle}
          />
        </Card>
        <BackTop visibilityHeight={200} style={{ right: 50 }} />
        <Affix style={styles.affixBox}></Affix>
      </div>
    );
  }
}

const styles = {
  tableStyle: {
    width: "100%"
  },
  affixBox: {
    position: "absolute",
    top: 100,
    right: 50,
    with: 170
  }
};

export default TableDemo;
