// 编写一个组件
import React from "react";

class HelloWorld extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "Hello World",
    };
  }

  render() {
    const { msg } = this.state;

    return (
      <div>
        <h2>{msg}</h2>
      </div>
    );
  }
}

export default HelloWorld;
