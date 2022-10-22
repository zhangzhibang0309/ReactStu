import React from "react";
import HelloWorld from "./HelloWorld";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isShowHW: true,
    };
  }

  switchSHShow() {
    this.setState({
      isShowHW: !this.state.isShowHW,
    });
  }

  render() {
    const { isShowHW } = this.state;

    return (
      <div>
        hhh
        <button onClick={() => this.switchSHShow()}>切换</button>
        {isShowHW && <HelloWorld />}
      </div>
    );
  }
}

export default App;
