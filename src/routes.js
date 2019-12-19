import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home";
import Courses from "./components/courses/Courses";
import Course from "./components/courses/Course";
import Dashboard from "./components/courses/course/Dashboard";
import About from "./components/courses/course/About";
import CourseLinks from "./components/courses/course/CourseLinks";
import Projects from "./components/projects/Projects";
import Games from './components/projects/Games';
import Sites from './components/projects/Sites';
import Apps from './components/projects/Apps';

const BaseRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses" component={Courses} />
      <Route path="/courses/:course"
        render={({ match: { url } }) => (
          <Course>
            <Switch>
              <Route exact path={`${url}`} component={Dashboard} />
              <Route path={`${url}/about`} component={About} />
              <Route path={`${url}/links`} component={CourseLinks} />
            </Switch>
          </Course>
        )}
      />
      <Route path="/projects"
        render={({ match: { url } }) => (
          <Projects>
            <Switch>
              <Route exact path={`${url}/games`} component={Games} />
              <Route path={`${url}/sites`} component={Sites} />
              <Route path={`${url}/apps`} component={Apps} />
              <Redirect to={`${url}/games`} />
            </Switch>
          </Projects>
        )}
      />
    </Switch>
  );
};

export default BaseRouter;
