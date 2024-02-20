import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import AllMedicines from "./components/AllMedicines";
import AddMedicine from "./components/AddMedicine";

const Routing = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />

      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/all-medicines" element={<AllMedicines />} />
      <Route path="/add-medicine" element={<AddMedicine />} />
    </Routes>
  );
};

export default Routing;
