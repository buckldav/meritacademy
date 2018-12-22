import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./containers/MainLayout";
import BaseRouter from "./routes";

class App extends Component {
  render() {
    return (
      <Router>
        <MainLayout>
          <BaseRouter />
        </MainLayout>
      </Router>
    );
  }
}

export default App;

