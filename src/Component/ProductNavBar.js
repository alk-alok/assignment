import React from "react";
import "./ProductNavBar.scss";
import zevi_logo from "../images/zevilogo.svg";
import { RiSearch2Line } from "react-icons/ri";

const ProductsNavBar = () => {
  return (
    <div className="products_navbar">
      <div></div>
      <form className="input_container">
        <input type="text" className="home_input" placeholder="Search..." />
        <button className="search_icon_container">
          <RiSearch2Line size={24} />
        </button>
      </form>
      <img src={zevi_logo} alt="" />
    </div>
  );
};

export default ProductsNavBar;
