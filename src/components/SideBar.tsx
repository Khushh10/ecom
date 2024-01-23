import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/redux">Redux</Link>
      <Link to="/products">Products</Link>
      <Link to="/vendors">Vendors</Link>
      <Link to="/login">Login</Link>
      <Link to="/product-category">Category</Link>
      <Link to="/users/jewelery">USERS</Link>
    </div>
  );
};

export default SideBar;
