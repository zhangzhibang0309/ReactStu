import React, { Component } from "react";
import { PropTypes } from "prop-types";

export class MainBanner extends Component {
  static propTypes = {
    banners: PropTypes.array,
    title: PropTypes.string,
  };

  static defaultProps = {
    banners: ["a", "b", "c"],
    title: "默认标题",
  };

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

// es2022之前静态变量这样定义，之后可以使用static语法
// MainBanner.propTypes = {
//   banners: PropTypes.array,
//   title: PropTypes.string,
// };

export default MainBanner;
