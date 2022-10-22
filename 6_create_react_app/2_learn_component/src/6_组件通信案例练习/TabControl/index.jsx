import React, { Component } from "react";

import "./style.css";

export class TabControl extends Component {
  constructor() {
    super();

    this.state = {
      currentIndex: 0,
    };
  }

  menuClick(index) {
    this.setState({
      currentIndex: index,
    });
    this.props.tabClick(index);
  }

  render() {
    const { titles } = this.props;

    return (
      <div className="tab-control">
        {titles.map((item, index) => {
          console.log(index === this.state.currentIndex);
          return (
            <div
              className={`item ${
                this.state.currentIndex === index ? "active" : ""
              }`}
              key={item}
              onClick={() => this.menuClick(index)}
            >
              <span className="text">{item}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TabControl;
