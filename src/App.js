import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News pageSize={6} country={"in"} />
      </div>
    );
  }
}

export default App;
