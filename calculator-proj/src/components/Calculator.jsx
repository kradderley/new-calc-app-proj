import React from "react";
import "./calculator.css";
import Header from "./Header"
import Display from "./Display";
import Buttons from "./Buttons";

const Calculator = () => {

  return (
    <>
      <section>
        <div className="section-style">
          <Header/>
          <Display />
          <Buttons />
        </div>
      </section>
    </>
  );
};

export default Calculator;
