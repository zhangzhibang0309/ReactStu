// 编写一个组件
import React from "react";
import HelloWorld from "./Components/HelloWorld";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "Hello App",
    };
  }

  render() {
    const { msg } = this.state;

    return (
      <div>
        <h2>{msg}</h2>
        <HelloWorld />
      </div>
    );
  }
}

export default App;
