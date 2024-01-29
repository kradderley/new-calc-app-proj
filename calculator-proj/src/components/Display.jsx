import React from "react";
import "./calculator.css";
import { useSelector } from "react-redux";
import { CALC_KEY } from "../redux/calc-redux/reducer";

const Display = () => {
  const answerDisplay = useSelector((state) => {
    return state[CALC_KEY];
  });

  return (
    <>
      <div className="input-box">
        <input
          type="text"
          placeholder="0"
          className="input-field"
          value={
            answerDisplay.answer.length === 0
              ? answerDisplay.number
              : answerDisplay.answer
          }
        />
      </div>
    </>
  );
};

export default Display;
