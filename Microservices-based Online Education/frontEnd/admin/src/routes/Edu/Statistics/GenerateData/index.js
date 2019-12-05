import React, { Component } from "react";
import { DatePicker, Button, Form } from "element-react";
import "element-theme-default";
import { statistics_endPoint } from "../../../../constants";
import axios from "axios";
import { message } from "antd";
class GenerateData extends Component {
  state = {
    value: null
  };

  generateData = async () => {
    if (this.state.value === null) {
      alert("Please pick a date!");
      return;
    }
    const date = this.state.value;
    const day =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    try {
      const { data } = await axios.get(
        statistics_endPoint + "/getStatisticsDay/" + day
      );
      if (data.success) {
        message.success("Data generated!");
      } else {
        message.error("Fail to generate data!");
      }
    } catch (ex) {
      message.error("Error!");
    }
  };

  render() {
    const { value } = this.state;
    return (
      <div className="source">
        <div className="block">
          <span className="demonstration">Date </span>
          <Form inline={true} className="demo-form-inline">
            <Form.Item>
              <DatePicker
                ref={e => (this.datepicker2 = e)}
                value={value}
                align="right"
                placeholder="Pick a date"
                onChange={date => {
                  console.debug("DatePicker2 changed: ", date);
                  this.setState({ value: date });
                }}
                shortcuts={[
                  {
                    text: "Today",
                    onClick: picker => {
                      this.setState({ value: new Date() });
                      this.datepicker2.togglePickerVisible();
                    }
                  },
                  {
                    text: "Yesterday",
                    onClick: picker => {
                      const date = new Date();
                      date.setTime(date.getTime() - 3600 * 1000 * 24);
                      this.setState({ value: date });
                      this.datepicker2.togglePickerVisible();
                    }
                  },
                  {
                    text: "A week ago",
                    onClick: picker => {
                      const date = new Date();
                      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                      this.setState({ value: date });
                      this.datepicker2.togglePickerVisible();
                    }
                  }
                ]}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                onClick={() => {
                  this.generateData();
                }}
              >
                Generate Data
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default GenerateData;
