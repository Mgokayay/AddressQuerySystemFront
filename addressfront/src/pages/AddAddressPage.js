import React, { useState } from "react";
import axios from "axios";

const AddAddressPage = () => {
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");

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
      console.log("Province Response:", response.data);
    } catch (error) {
      console.error("There was an error posting the data!", error);
    }
  };

  return (
    <div>
      <h1>Add Province and District</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Province:
            <input
              type="text"
              value={province}
              onChange={handleProvinceChange}
            />
          </label>
        </div>
        <div>
          <label>
            District:
            <input
              type="text"
              value={district}
              onChange={handleDistrictChange}
            />
          </label>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddAddressPage;
