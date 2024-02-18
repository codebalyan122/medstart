import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import AllMedicines from "./components/AllMedicines";

const Routing = () => {
  return (
    <Routes>
      {["/", "/login"].map((path, index) => (
        <Route path={path} element={<Login />} index={index} key={index} />
      ))}

      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/all-medicines" element={<AllMedicines />} />
    </Routes>
  );
};

export default Routing;
