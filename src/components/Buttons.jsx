import React from "react";
import "./calculator.css";
import { useDispatch } from "react-redux";
import {
  backSpace,
  clearScreen,
  generateButton,
  generateNewAns,
} from "../redux/calc-redux/actions";

const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="keypad">
        <button
          onClick={() => dispatch(clearScreen())}
          className="keypad-number signs"
        >
          AC
        </button>
        <button
          onClick={() => dispatch(backSpace())}
          className="keypad-number signs"
        >
          C
        </button>
        <button
          onClick={() => dispatch(generateButton("*100"))}
          className="keypad-number signs"
        >
          %
        </button>
        <button
          onClick={() => dispatch(generateButton("/"))}
          className="keypad-number signs"
        >
          ÷
        </button>
        <button
          onClick={() => dispatch(generateButton(7))}
          className="keypad-number"
        >
          7
        </button>
        <button
          onClick={() => dispatch(generateButton(8))}
          className="keypad-number"
        >
          8
        </button>
        <button
          onClick={() => dispatch(generateButton(9))}
          className="keypad-number"
        >
          9
        </button>
        <button
          onClick={() => dispatch(generateButton("*"))}
          className="keypad-number signs"
        >
          x
        </button>
        <button
          onClick={() => dispatch(generateButton(4))}
          className="keypad-number"
        >
          4
        </button>
        <button
          onClick={() => dispatch(generateButton(5))}
          className="keypad-number"
        >
          5
        </button>
        <button
          onClick={() => dispatch(generateButton(6))}
          className="keypad-number"
        >
          6
        </button>
        <button
          onClick={() => dispatch(generateButton("-"))}
          className="keypad-number signs"
        >
          -
        </button>
        <button
          onClick={() => dispatch(generateButton(1))}
          className="keypad-number"
        >
          1
        </button>
        <button
          onClick={() => dispatch(generateButton(2))}
          className="keypad-number"
        >
          2
        </button>
        <button
          onClick={() => dispatch(generateButton(3))}
          className="keypad-number"
        >
          3
        </button>
        <button
          onClick={() => dispatch(generateButton("+"))}
          className="keypad-number signs"
        >
          +
        </button>
        <button
          onClick={() => dispatch(generateButton(0))}
          className="keypad-number zero"
        >
          0
        </button>
        <button
          onClick={() => dispatch(generateButton("."))}
          className="keypad-number signs"
        >
          .
        </button>
        <button
          onClick={() => dispatch(generateNewAns())}
          className="keypad-number signs"
        >
          =
        </button>
      
      </div>
    </>
  );
};

export default Buttons;
