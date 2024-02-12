import React, { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Vendor from "./components/Vendor";
import Product from "./components/Product";
import Login from "./components/Login";
import ProductCategory from "./components/ProductCategory";
import Redux from "./components/Redux";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import { Admin } from "./components/Admin";
import Checkbox from "antd/es/checkbox/Checkbox";
import CheckBoxNew from "./components/CheckboxNew";
import Trial from "./components/TrialComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/checkbox" element={<CheckBoxNew />}></Route>
          <Route path="/redux" element={<Redux />} />
          <Route path="/vendors" element={<Vendor />} />
          <Route path="/checkbox-final" element={<Vendor />} />
          <Route path="/products" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product-category" element={<ProductCategory />} />
          <Route path="/trial" element={<Trial />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:userId' element={<UserDetails />} />
          {/* <Route path="/users/admin" element={<Admin />} />  */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
