import React, { Component } from "react";
import { Form, Select, DatePicker, Button } from "element-react";
import echarts from "echarts";
import "element-theme-default";
import axios from "axios";
import { statistics_endPoint } from "../../../../constants";
class Charts extends Component {
  state = {
    options: [
      { label: "Login", value: "login_num" },
      { label: "Registration", value: "register_num" },
      { label: "Video View", value: "video_view_num" }
    ],
    searchObj: {
      type: "",
      beginTime: "",
      endTime: ""
    },
    beginDate: null,
    endDate: null,
    btnDisabled: false,
    chart: null,
    title: "",
    xData: [],
    yData: []
  };

  onSelectChange = value => {
    this.state.searchObj.type = value;
    this.setState({ searchObj: this.state.searchObj });
  };

  onBeginTimeChange = date => {
    if (date === null) {
      return;
    }
    const beginTime =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    this.state.searchObj.beginTime = beginTime;
    this.setState({ searchObj: this.state.searchObj });
  };

  onEndTimeChange = date => {
    if (date === null) {
      return;
    }
    const endTime =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    this.state.searchObj.endTime = endTime;
    this.setState({ searchObj: this.state.searchObj });
  };

  showChart = () => {
    this.initChartData();
  };

  initChartData = async () => {
    const { data } = await axios.get(
      statistics_endPoint +
        "/" +
        "getCountData/" +
        this.state.searchObj.type +
        "/" +
        this.state.searchObj.beginTime +
        "/" +
        this.state.searchObj.endTime
    );

    this.state.xData = data.data.mapdata.timeList;
    this.state.yData = data.data.mapdata.dataList;
    this.setState(this.state);
    console.log(this.state);
    this.setChart();
  };

  // 设置图标参数

  setChart = () => {
    // 基于准备好的dom，初始化echarts实例
    this.chart = echarts.init(document.getElementById("chart"));
    // console.log(this.chart)
    // 指定图表的配置项和数据
    var option = {
      // x轴是类目轴（离散数据）,必须通过data设置类目数据
      xAxis: {
        type: "category",
        data: this.state.xData
      },
      // y轴是数据轴（连续数据）
      yAxis: {
        type: "value"
      },
      // 系列列表。每个系列通过 type 决定自己的图表类型
      series: [
        {
          // 系列中的数据内容数组
          data: this.state.yData,
          // 折线图
          type: "line"
        }
      ]
    };
    this.chart.setOption(option);
  };

  render() {
    const beginDateValue = this.state.beginDate;
    const endDateValue = this.state.endDate;
    return (
      <div className="app-container">
        <Form inline={true} className="demo-form-inline">
          <Form.Item label="Charts">
            <Select
              onChange={value => {
                this.onSelectChange(value);
              }}
            >
              {this.state.options.map(option => (
                <Select.Option
                  key={option.value}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Begin Time">
            <DatePicker
              value={beginDateValue}
              onChange={date => {
                this.setState({ beginDate: date });
                this.onBeginTimeChange(date);
              }}
            ></DatePicker>
          </Form.Item>
          <Form.Item label="End Time">
            <DatePicker
              value={endDateValue}
              onChange={date => {
                this.setState({ endDate: date });
                this.onEndTimeChange(date);
              }}
            ></DatePicker>
          </Form.Item>
          <Button
            type="primary"
            onClick={() => {
              this.showChart();
            }}
            disabled={this.state.btnDisabled}
          >
            Plot
          </Button>
        </Form>
        <div className="chart-container">
          <div
            id="chart"
            className="chart"
            style={{ height: "500px", width: "100%" }}
          />
        </div>
      </div>
    );
  }
}

export default Charts;
