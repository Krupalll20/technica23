import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="h-[100vh] bg-[#0e0915] w-full flex justify-center items-center flex-col">
      <Navbar />
      <p className="text-white text-8xl font-semibold tracking-wider uppercase">
        Technica'23
      </p>
      <p className="text-white text-3xl font-semibold tracking-wider uppercase mt-3">
        GCET x ISTE
      </p>
    </div>
  );
};

export default Home;
