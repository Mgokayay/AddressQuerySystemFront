import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="add-address">Press the button to add a address</Link>
      <Link to="show-address">Press the button to show address</Link>
    </div>
  );
};

export default HomePage;
