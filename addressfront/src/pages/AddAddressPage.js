import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddAddressPage = () => {
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleProvinceChange = (event) => {
    setProvince(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { province: province, district: district };

    try {
      const response = await axios.post(
        "http://localhost:9001/mavidevv/address",
        data
      );
      setStatusMessage("Province and District successfully saved!");
      console.log("Province Response:", response.data);
    } catch (error) {
      setStatusMessage("There was an error posting the data!");
      console.error("There was an error posting the data!", error);
    }
  };

  return (
    <div className="flex flex-col h-[100vh] items-center justify-center gap-8">
      <h1 className="font-bold text-2xl text-blue-900">
        Add Province and District
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <h className="text-orange-500 font-medium">Province</h>
            <input
              type="text"
              value={province}
              onChange={handleProvinceChange}
              className="ml-2 border-2 rounded"
            />
          </div>
          <div className="flex justify-between">
            <h className="text-orange-500 font-medium">District</h>
            <input
              type="text"
              value={district}
              onChange={handleDistrictChange}
              className="ml-2 border-2 rounded"
            />
          </div>
          <div className="flex justify-center mt-2">
            <button
              type="submit"
              className="border-2 p-[4px] border-blue-900 rounded-lg bg-orange-500 hover:scale-105 transition duration-200 w-[30%]"
            >
              <h className="text-white">Save</h>
            </button>
          </div>
          {statusMessage && (
            <div className="flex justify-center mt-2 text-green-500">
              {statusMessage}
            </div>
          )}
          <div className="flex justify-center mt-2 gap-2">
            <Link
              to="/"
              className="border-2 p-2 border-blue-900 rounded-lg bg-orange-500 hover:scale-105 transition duration-200 "
            >
              <h className="text-white">Go to HomePage</h>
            </Link>
            <Link
              to="/show-address"
              className="border-2 p-2 border-blue-900 rounded-lg bg-orange-500 hover:scale-105 transition duration-200"
            >
              <h className="text-white">Go to show address</h>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAddressPage;
