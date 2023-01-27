import React from "react";
import "./Styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Add from "./components/Add";
import Details from "./components/Details";
import Update from "./components/Update";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/employee/add" element={<Add />} />
          <Route path="/employee/detail/:id" element={<Details />} />
          <Route path="/employee/edit/:id" element={<Update />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
