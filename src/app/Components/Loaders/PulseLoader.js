import React, { Component } from "react";
import { PulseLoader } from "react-spinners";

const override = {
  display: "flex",
  borderColor: "red",
};

class Loader extends Component {
  render() {
    const { size, color } = this.props;
    return (
      <div className="sweet-loading">
        <PulseLoader
          style={override}
          size={size ? size : 5}
          color={color ? color : "#fff"}
          loading={true}
        />
      </div>
    );
  }
}

export default Loader;
