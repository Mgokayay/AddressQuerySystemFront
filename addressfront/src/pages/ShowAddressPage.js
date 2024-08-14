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
      <h2 className="font-bold text-2xl text-blue-900">Addresses</h2>
      <div className="border-2 border-blue-900 rounded-md w-[50%] h-[50%] overflow-auto">
        {data.length === 0 ? (
          <div className="text-center py-4 text-gray-500">
            There is no data to show
          </div>
        ) : (
          <>
            <div className="flex py-2 border-b-2 bg-gray-200">
              <div className="border-r-2 w-[30%] text-center font-semibold">
                Province
              </div>
              <div className="w-[30%] text-center font-semibold">District</div>
              <div className="w-[30%] text-center font-semibold">
                Population
              </div>

              <div className="w-[10%] text-center font-semibold">Action</div>
            </div>
            {data.map((address, index) => (
              <div key={index} className="flex py-3 border-b-2">
                <div className="border-r-2 w-[30%] text-center">
                  {address.province}
                </div>
                <div className="w-[30%] text-center">{address.district}</div>
                <div className="w-[30%] text-center">{address.population}</div>

                <button
                  onClick={() => handleDelete(address.id)}
                  className="border-r-2 w-[10%] text-red-500"
                >
                  Delete
                </button>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="flex justify-center mt-2 gap-4">
        <Link
          to="/add-address"
          className="border-2 p-2 border-blue-900 rounded-lg bg-orange-500 hover:scale-105 transition duration-200"
        >
          <span className="text-white">Add new address</span>
        </Link>
        <Link
          to="/"
          className="border-2 p-2 border-blue-900 rounded-lg bg-orange-500 hover:scale-105 transition duration-200"
        >
          <span className="text-white">Go to Home Page</span>
        </Link>
      </div>
    </div>
  );
};

export default ShowAddressPage;
