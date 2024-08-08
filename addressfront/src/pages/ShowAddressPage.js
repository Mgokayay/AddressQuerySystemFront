import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowAddressPage = () => {
  const [data, setData] = useState([]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9001/mavidevv/address/${id}`);
      setData(data.filter((address) => address.id !== id));
    } catch (errors) {
      console.error(errors);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9001/mavidevv/address"
        );
        setData(response.data);
      } catch (errors) {
        console.error(errors);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-[100vh] items-center justify-center gap-8">
      <h2 className="font-bold text-2xl text-blue-900 ">Adresses</h2>
      <div className="border-2 border-blue-900 rounded-md w-[50%] h-[50%] overflow-auto">
        {data?.map((address, index) => (
          <div key={index} className="flex py-3 border-b-2 ">
            <div className="border-r-2 w-[40%] text-center">
              {address.province}
            </div>
            <div className="w-[40%] text-center">{address.district}</div>
            <button
              onClick={() => handleDelete(address.id)}
              className="border-r-2 w-[20%] text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-2">
        <Link
          to="/add-address"
          className="border-2 p-2 border-blue-900 rounded-lg bg-orange-500 hover:scale-105 transition duration-200"
        >
          <h className="text-white">Add new address</h>
        </Link>
      </div>
    </div>
  );
};

export default ShowAddressPage;
