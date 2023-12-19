import React from "react";
import "./calculator.css";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const Calculator = () => {
  return (
    <>
      <section>
        <div className="section-style">
          <div className="header">
            <GiHamburgerMenu />
            <p>My Calculator</p>
          </div>
          <div className="input-box">
            <input type="text" placeholder="0" className="input-field" />
          </div>
          <div className="keypad">
            <button className="keypad-number signs">AC</button>
            <button className="keypad-number signs">C</button>
            <button className="keypad-number signs">%</button>
            <button className="keypad-number signs">÷</button>
            <button className="keypad-number">7</button>
            <button className="keypad-number">8</button>
            <button className="keypad-number">9</button>
            <button className="keypad-number signs">x</button>
            <button className="keypad-number">4</button>
            <button className="keypad-number">5</button>
            <button className="keypad-number">6</button>
            <button className="keypad-number signs">-</button>
            <button className="keypad-number">1</button>
            <button className="keypad-number">2</button>
            <button className="keypad-number">3</button>
            <button className="keypad-number signs">+</button>
            <button className="keypad-number zero">0</button>
            <button className="keypad-number signs zero">,</button>
            <button className="keypad-number signs zero">=</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calculator;
