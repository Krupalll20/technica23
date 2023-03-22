import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [selected, setSelected] = useState("Home");
  const router = useLocation();
  useEffect(() => {
    if (router.pathname === "/home") setSelected("Home");
    if (router.pathname === "/event") setSelected("Event");
    if (router.pathname === "/about") setSelected("About");
    if (router.pathname === "/event/tech") setSelected("Event");
    if (router.pathname === "/event/nontech") setSelected("Event");
  }, [router.pathname]);

  return (
    <div className="bg-[#e7e7e7] px-6 py-2 w-full absolute top-0 flex justify-between items-center">
      <Link to="/">
        <img
          src={require("./assets/istelogo.png")}
          alt="iste logo"
          className="w-14"
        />
      </Link>
      <ul className="flex justify-center items-center">
        <Link
          to="/"
          className={`ml-6 w-[80px] text-center uppercase text-base tracking-wider cursor-pointer ${
            selected === "Home"
              ? "font-semibold border-b-2 pb-1 border-blue-700"
              : "font-medium"
          }`}
        >
          Home
        </Link>
        <Link
          to="/event"
          className={`ml-6 w-[80px] text-center uppercase text-base tracking-wider cursor-pointer ${
            selected === "Event"
              ? "font-semibold border-b-2 pb-1 border-blue-700"
              : "font-medium"
          }`}
        >
          Event
        </Link>
        <Link
          to="/about"
          className={`ml-6 w-[80px] text-center uppercase text-base tracking-wider cursor-pointer ${
            selected === "About"
              ? "font-semibold border-b-2 pb-1 border-blue-700"
              : "font-medium"
          }`}
        >
          About
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
