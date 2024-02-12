import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <Link to="/" className="mx-2">Home</Link>
      <Link to="/redux" className="mx-2">Redux</Link>
      <Link to="/products" className="mx-2">Products</Link>
      <Link to="/checkbox" className="mx-2">CHECKKK</Link>
      <Link to="/product-category" className="mx-2">Category</Link>
      <Link to="/users/jewelery" className="mx-2">USERS</Link>
      <Link to="/trial" className="mx-2">TRIALL</Link>
    </div>
  );
};

export default SideBar;
