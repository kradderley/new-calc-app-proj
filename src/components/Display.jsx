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
      <div className="calculation-box">
        <input
          type="text"
          placeholder=""
          className="input-field-one"
          defaultValue={
            answerDisplay.answer.length !== 0
              ? answerDisplay.number
              : answerDisplay.answer
          }
        />
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="0"
          className="input-field-two"
          defaultValue={
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
