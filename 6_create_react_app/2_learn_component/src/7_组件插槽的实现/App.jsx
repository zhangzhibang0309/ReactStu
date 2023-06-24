import React, { Component } from "react";
import Navbar from "./Navbar";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <button>按钮</button>
          <h1>标题</h1>
          <i>斜体</i>
        </Navbar>
      </div>
    );
  }
}

export default App;
