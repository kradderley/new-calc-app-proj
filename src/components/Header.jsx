import React from "react";
import "./calculator.css";
import { FaCalculator } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <div className="header">
        <FaCalculator />
        <p>My Calculator</p>
      </div>
    </>
  );
};

export default Header;
