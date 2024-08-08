import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col h-[100vh] items-center justify-center gap-8">
      <h1 className="font-bold text-3xl text-blue-900">Welcome</h1>
      <h1 className="text-base text-blue-900">
        You can add a new address or list your addresses
      </h1>
      <Link
        to="add-address"
        className="border-2 p-2 border-blue-900 rounded-lg bg-orange-500 hover:scale-105 transition duration-200"
      >
        <h className="text-white">Add New Address</h>
      </Link>
      <Link
        to="show-address"
        className="border-2 p-2 border-blue-900 rounded-lg bg-orange-500 hover:scale-105 transition duration-200"
      >
        <h className="text-white">Show Addresses</h>
      </Link>
    </div>
  );
};

export default HomePage;
