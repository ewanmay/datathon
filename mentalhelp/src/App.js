import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import InputScreenPage from "./features/prediction/containers/input-screen-page-container";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="shell">
          <Route exact path="/" component={InputScreenPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
