import { initialState } from "../initialState";
import { GEN_BUTTON, GEN_NEW_ANS, CLEAR_SCREEN, BACK_SPACE } from "./types";

export const CALC_KEY = "calculatorStore";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GEN_BUTTON:
      return {
        ...state,
        ...action.payload,
        number: state.number.concat(action.payload),
      };

    case GEN_NEW_ANS:
      try {
        return {
          ...state,
          ...action.payload,
          answer: eval(state.number).toString(),
        };
      } catch (error) {
        return {
          ...state,
          ...action.payload,
          answer: "E",
        };
      }

    case CLEAR_SCREEN:
      return {
        ...state,
        ...action.payload,
        number: "",
        answer: "",
      };

    case BACK_SPACE:
      return {
        ...state,
        ...action.payload,
        number: state.number.slice(0, -1),
        answer: "",
      };

    default:
      return initialState;
  }
};
