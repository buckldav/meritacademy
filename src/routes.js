import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home";
import Courses from "./components/courses/Courses";
import Course from "./components/courses/Course";
import Projects from "./components/projects/Projects";
import Games from './components/projects/Games';
import Sites from './components/projects/Sites';
import MobileApps from "./components/projects/MobileApps";

const BaseRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/courses/:course" component={Course} />
      <Route path="/projects"
        render={({ match: { url } }) => (
          <Projects>
            <Switch>
              <Route exact path={`${url}/games`} component={Games} />
              <Route path={`${url}/sites`} component={Sites} />
              <Route path={`${url}/mobile`} component={MobileApps} />
              <Redirect to={`${url}/games`} />
            </Switch>
          </Projects>
        )}
      />
    </Switch>
  );
};

export default BaseRouter;
