import React, { Component } from "react";

class Decrement extends Component {
  btnClick(count) {
    this.props.onClick(count);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.btnClick(1)}>-1</button>
        <button onClick={() => this.btnClick(5)}>-5</button>
        <button onClick={() => this.btnClick(10)}>-10</button>
      </div>
    );
  }
}

export default Decrement;
