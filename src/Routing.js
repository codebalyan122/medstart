import { Route, Routes } from "react-router-dom";

import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default Routing;
