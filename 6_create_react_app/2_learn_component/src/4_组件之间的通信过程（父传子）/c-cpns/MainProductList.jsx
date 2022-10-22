import React, { Component } from "react";

export class MainProductList extends Component {
  render() {
    const { productionList } = this.props;

    return (
      <div>
        --MainProductList
        <ul>
          {productionList.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default MainProductList;
