import React from "react";
import "./calculator.css";
import { useSelector } from "react-redux";
import { CALC_KEY } from "../redux/calc-redux/reducer";

const Display = () => {
  const answerDisplay = useSelector((state) => {
    return state[CALC_KEY];
  });

  console.log(answerDisplay.answer.length); 
  console.log(answerDisplay.number); 
  console.log(answerDisplay.answer); 

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
      <div >
        <input
          type="text"
          placeholder="0" 
          value={
            answerDisplay.answer.length > 0 
              ? answerDisplay.number
              : answerDisplay.answer
          }
        />
      </div>
    </>
  );
};

export default Display;
