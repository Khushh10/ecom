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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/redux" element={<Redux />} />
            <Route path="/vendors" element={<Vendor />} />
            <Route path="/products" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product-category" element={<ProductCategory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
