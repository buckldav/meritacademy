import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Courses from "./components/courses/Courses";
import Course from "./components/courses/Course";

const BaseRouter = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/courses/:course" component={Course} />
    </div>
  );
};

export default BaseRouter;
