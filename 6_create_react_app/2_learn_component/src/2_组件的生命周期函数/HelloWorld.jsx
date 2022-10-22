import React from "react";

class HelloWorld extends React.Component {
  // 1.构造方法
  constructor() {
    console.log("HelloWorld constructor");
    super();

    this.state = {
      msg: "hello world",
    };
  }

  btnClick() {
    this.setState({
      msg: "hello world update",
    });
  }

  // 2.执行render函数
  render() {
    const { msg } = this.state;
    console.log("HelloWorld render");

    return (
      <div>
        {msg}
        <button onClick={() => this.btnClick()}>按钮</button>
      </div>
    );
  }

  // 3.组件被渲染到DOM：被挂载到DOM
  componentDidMount() {
    // 建议网络请求在这里发送
    // 可以在此处添加订阅，然后要在componentWillUnmount取消订阅
    console.log("HelloWorld componentDidMount");
  }

  // 4.组件的DOM被更新完成：DOM发生更新
  componentDidUpdate(precProps,percState,snapshot) {

    console.log(precProps,percState,snapshot);
    console.log("HelloWorld componentDidUpdate");
  }

  // 5.组件从DOM中卸载掉：从DOM中移除
  componentWillUnmount() {
    // 做必要的清除工作
    console.log("HelloWorld componentWillUnmount");
  }

  // 不常用的生命周期
  shouldComponentUpdate() {
    console.log("HelloWorld shouldComponentUpdate");

    return true;
  }

  // update之前保存一些数据
  getSnapshotBeforeUpdate() {
    return {
      scrollPosition: 1000,
    };
  }
}

export default HelloWorld;
