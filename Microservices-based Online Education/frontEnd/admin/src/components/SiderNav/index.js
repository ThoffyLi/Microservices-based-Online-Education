import React from "react";
import CustomMenu from "../CustomMenu/index";

const menus = [
  {
    title: "Home",
    icon: "home",
    key: "/home"
  },
  {
    title: "Teacher",
    icon: "desktop",
    key: "/teacher",
    subs: [
      { key: "/teacher/list", title: "Teacher List", icon: "" },
      { key: "/teacher/add", title: "Add Teacher", icon: "" }
    ]
  },

  {
    title: "Category",
    icon: "bars",
    key: "/category",
    subs: [
      { key: "/category/list", title: "Category List", icon: "" },
      { key: "/category/import", title: "Import categories", icon: "" }
    ]
  },

  {
    title: "Course",
    icon: "laptop",
    key: "/course",
    subs: [
      { key: "/course/list", title: "Course List", icon: "" },
      { key: "/course/publishcourse", title: "Publish Course", icon: "" }
    ]
  },

  {
    title: "Statistics",
    icon: "bars",
    key: "/statistics",
    subs: [
      { key: "/statistics/list", title: "Generate Data", icon: "" },
      { key: "/statistics/charts", title: "Charts", icon: "" }
    ]
  }
];

class SiderNav extends React.Component {
  render() {
    return (
      <div style={{ height: "100vh", overflowY: "scroll" }}>
        <div style={styles.logo}>
          <font color="white"> XueYuan Edu</font>
        </div>
        <CustomMenu menus={menus} />
      </div>
    );
  }
}

const styles = {
  logo: {
    height: "26px",
    background: "rgba(255, 255, 255)",
    margin: "33px"
  }
};

export default SiderNav;
