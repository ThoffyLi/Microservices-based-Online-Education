import React from "react";
import { withRouter, Switch, Redirect } from "react-router-dom";
import LoadableComponent from "../../utils/LoadableComponent";
import PrivateRoute from "../PrivateRoute";

const Home = LoadableComponent(() => import("../../routes/Home/index")); //参数一定要是函数，否则不会懒加载，只会代码拆分

const Teacher = LoadableComponent(() =>
  import("../../routes/Edu/Teacher/index")
); //参数一定要是函数，否则不会懒加载，只会代码拆分

const AddTeacher = LoadableComponent(() =>
  import("../../routes/Edu/AddTeacher/index")
);

const Category = LoadableComponent(() =>
  import("../../routes/Edu/Category/index")
);

const ImportCategory = LoadableComponent(() =>
  import("../../routes/Edu/ImportCategory/index")
);

const Course = LoadableComponent(() => import("../../routes/Edu/Course/index"));

const PublishCourse = LoadableComponent(() =>
  import("../../routes/Edu/PublishCourse/index")
);
const Syllabus = LoadableComponent(() =>
  import("../../routes/Edu/PublishCourse/Syllabus/index")
);
const Publish = LoadableComponent(() =>
  import("../../routes/Edu/PublishCourse/Publish/index")
);

const PublishCourseId = LoadableComponent(() =>
  import("../../routes/Edu/PublishCourse/index")
);
const SyllabusId = LoadableComponent(() =>
  import("../../routes/Edu/PublishCourse/Syllabus/index")
);

const PublishId = LoadableComponent(() =>
  import("../../routes/Edu/PublishCourse/Publish/index")
);

const GenerateData = LoadableComponent(() =>
  import("../../routes/Edu/Statistics/GenerateData/index")
);

const Charts = LoadableComponent(() =>
  import("../../routes/Edu/Statistics/Charts/index")
);

@withRouter
class ContentMain extends React.Component {
  render() {
    return (
      <div style={{ padding: 16, position: "relative" }}>
        <Switch>
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/teacher/list" component={Teacher} />
          <PrivateRoute exact path="/teacher/add" component={AddTeacher} />
          <PrivateRoute exact path="/teacher/list" component={Teacher} />
          <PrivateRoute exact path="/category/list" component={Category} />
          <PrivateRoute
            exact
            path="/category/import"
            component={ImportCategory}
          />

          <PrivateRoute exact path="/course/list" component={Course} />
          <PrivateRoute
            exact
            path="/course/publishcourse"
            component={PublishCourse}
          />
          <PrivateRoute
            exact
            path="/course/publishcourse/:id"
            component={PublishCourseId}
          />

          <PrivateRoute exact path="/course/syllabus" component={Syllabus} />
          <PrivateRoute
            exact
            path="/course/syllabus/:id"
            component={SyllabusId}
          />
          <PrivateRoute exact path="/course/publish" component={Publish} />
          <PrivateRoute
            exact
            path="/course/publish/:id"
            component={PublishId}
          />

          <PrivateRoute
            exact
            path="/statistics/list"
            component={GenerateData}
          />

          <PrivateRoute exact path="/statistics/charts" component={Charts} />

          <Redirect exact from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}

export default ContentMain;
