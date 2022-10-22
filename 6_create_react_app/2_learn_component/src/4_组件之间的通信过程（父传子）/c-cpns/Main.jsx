import React, { Component } from "react";
import MainBanner from "./MainBanner";
import MainProductList from "./MainProductList";

export class Main extends Component {
  constructor() {
    super();

    this.state = {
      bannerList: ["banner1", "banner2", "banner3", "banner4", "banner5"],
      productionList: [
        "productio1",
        "productio2",
        "productio3",
        "productio4",
        "productio5",
      ],
    };
  }

  render() {
    const { bannerList, productionList } = this.state;

    return (
      <div>
        <div>Main</div>
        <MainBanner bannerList={bannerList} title="banner" />
        <MainProductList productionList={productionList} />
      </div>
    );
  }
}

export default Main;
