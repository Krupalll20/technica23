import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Event = () => {
  return (
    <div className="h-[100vh] bg-[#0e0915] w-full flex justify-center items-center flex-col">
      <Navbar />
      <p className="text-5xl font-semibold text-white mb-10">Technica Event</p>
      <div className="w-[80%] mx-auto gap-x-20 flex justify-evenly items-center">
        <Link
          to="/event/tech"
          className="bg-white w-1/2 h-[180px] flex justify-center items-center rounded-md hover:scale-105 transition-all hover:transition-all ease-linear hover:ease-linear duration-200 hover:duration-200 cursor-pointer"
        >
          <div>
            <p className="text-3xl font-medium">Technical</p>
          </div>
        </Link>
        <Link
          to="/event/nontech"
          className="bg-white w-1/2 h-[180px] flex justify-center items-center rounded-md hover:scale-105 transition-all hover:transition-all ease-linear hover:ease-linear duration-200 hover:duration-200 cursor-pointer"
        >
          <div>
            <p className="text-3xl font-medium">Non Technical</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Event;
