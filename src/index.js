import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Event from "./Event";
import About from "./About";
import Tech from "./Tech";
import NonTech from "./NonTech";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/tech" element={<Tech />} />
      <Route path="/event/nontech" element={<NonTech />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
