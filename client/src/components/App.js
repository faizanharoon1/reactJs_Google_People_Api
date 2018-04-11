import React, { Component } from "react";

import People from "./People";
import logo from "../logo.svg";
import "../App.css";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <People />
      </div>
    );
  }
}

export default App;
