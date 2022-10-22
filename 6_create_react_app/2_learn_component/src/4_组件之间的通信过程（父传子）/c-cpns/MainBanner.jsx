import React, { Component } from "react";

export class MainBanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "hlw",
    };
  }

  render() {
    const { bannerList, title } = this.props;
    
    return (
      <div>
        --MainBanner
        <p>--{title}</p>
        <ul>
          {bannerList.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default MainBanner;
