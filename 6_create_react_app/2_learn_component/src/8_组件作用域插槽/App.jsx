import React, { Component } from "react";

import TabControl from "./TabControl";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      titles: ["fashion", "new model", "featured"],
      tabIndex: 0,
    };
  }

  thistabClick(index) {
    this.setState({
      tabIndex: index,
    });
  }

  // 这个案例用来演示jsx如何实现类似Vue中作用域插槽的功能，但我觉得这不应该算一种语法拿出来学习，而是类比一下思路
  getTabItem(item) {
    if(item === 'fashion') {
      return <button>fashion</button>
    } else if(item === 'new model') {
      return <h1>new model</h1>
    } else if(item === 'featured') {
      return <i>featured</i>
    }
  }

  render() {
    const { titles, tabIndex } = this.state;

    return (
      <div>
        <TabControl
          titles={this.state.titles}
          tabClick={(index) => this.thistabClick(index)}
          itemType={item => this.getTabItem(item)}
        />
        <h1>{titles[tabIndex]}</h1>
      </div>
    );
  }
}

export default App;
