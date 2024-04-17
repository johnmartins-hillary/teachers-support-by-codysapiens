"use client"

import React, { Component } from "react";
import { PulseLoader } from "react-spinners";

const override = {
  display: "flex",
  borderColor: "red",
};

class Loader extends Component {
  render() {
    const { size, color, className } = this.props;
    return (
      <div className="flex items-center justify-center sweet-loading w-full">
        <PulseLoader
          style={override}
          size={size ? size : 5}
          color={color ? color : "#fff"}
          loading={true}
          className={className}
        />
      </div>
    );
  }
}

export default Loader;
