import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddAddressPage from "./pages/AddAddressPage";
import ShowAddressPage from "./pages/ShowAddressPage";

const PageContent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-address" element={<AddAddressPage />} />
        <Route path="/show-address" element={<ShowAddressPage />} />
      </Routes>
    </div>
  );
};

export default PageContent;
