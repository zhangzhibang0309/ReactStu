import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: "App Component",
    };
  }

  render() {
    const { msg } = this.state;

    // 1.react元素：通过jsx编写的代码就会被编译成React.createElement，所以返回的就是一个React元素
    return <h2>{msg}</h2>;

    // 2.组件或者fragments
    // return [1, 2, 3];
    // return [<h1>h1</h1>, <h2>h2</h2>, <p>p</p>];

    // 3.字符串/数字类型
    // return 123
    // return "123"

    // 4.boolean
    // return true;
  }
}

export default App;
