import React, { Component } from "react";

export class Navbar2 extends Component {
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props;
    return (
      <div>
        props插槽
        <div>
          leftdiv
          <div>{leftSlot}</div>
        </div>
        <div>
          center
          <div>{centerSlot}</div>
        </div>
        <div>
          right
          <div>{rightSlot}</div>
        </div>
      </div>
    );
  }
}

export default Navbar2;
