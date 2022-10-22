import React, { Component } from "react";

import Increment from "./Increment";
import Decrement from "./Decrement";

class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 100,
    };
  }

  btnIncre(counter) {
    this.setState({
      counter: this.state.counter + counter,
    });
  }
  btnDecre(counter) {
    this.setState({
      counter: this.state.counter - counter,
    });
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h2>{counter}</h2>
        <Increment onClick={(counter) => this.btnIncre(counter)} />
        <Decrement onClick={(counter) => this.btnDecre(counter)} />
      </div>
    );
  }
}

export default App;
