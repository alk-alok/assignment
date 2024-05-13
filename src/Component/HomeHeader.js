import React from "react";
import zevi_logo from "../images/zevilogo.svg";
import "./HomeHeader.scss";

function HomeHeader() {
  return (
    <div className="home_header">
      <img src={zevi_logo} alt="" />
    </div>
  );
}

export default HomeHeader;