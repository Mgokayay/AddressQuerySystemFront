import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowAddressPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9001/mavidevv/address"
        );
        setData(response.data);
        console.log(response.data);
      } catch (errors) {
        console.error(errors);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data?.map((address, index) => (
        <div key={index}>
          <div>{address.province}</div>
          <div>{address.district}</div>
        </div>
      ))}
      <button>Press the button to add a province</button>
    </div>
  );
};

export default ShowAddressPage;
