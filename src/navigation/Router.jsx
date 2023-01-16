import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComp from "../pages/Comp/HomeComp";
import HomeCRUD from "../pages/CRUD/HomeCRUD";
import Home from "../pages/Home";
import HomeLogin from "../pages/Login/HomeLogin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<HomeLogin />} />
        <Route path="/crud" element={<HomeCRUD />} />
        <Route path="/components" element={<HomeComp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
