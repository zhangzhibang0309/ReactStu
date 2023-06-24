import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    const { children } = this.props;
    console.log(children);
    return (
      <div>
        <p>children插槽</p>
        <div>
          leftdiv
          <div>{children[0]}</div>
        </div>
        <div>
          center
          <div>{children[1]}</div>
        </div>
        <div>
          right
          <div>{children[2]}</div>
        </div>
      </div>
    );
  }
}

export default Navbar;
