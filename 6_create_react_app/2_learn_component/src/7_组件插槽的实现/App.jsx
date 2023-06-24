import React, { Component } from "react";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

export class App extends Component {
  render() {
    return (
      <div>
        {/* 使用children方式传递插槽 */}
        <Navbar>
          <button>按钮</button>
          <h1>标题</h1>
          <i>斜体</i>
        </Navbar>

        {/* 通过props传递插槽 */}
        <Navbar2
          leftSlot={<button>按钮</button>}
          centerSlot={<h1>标题</h1>}
          rightSlot={<i>斜体</i>}
        />
      </div>
    );
  }
}

export default App;
