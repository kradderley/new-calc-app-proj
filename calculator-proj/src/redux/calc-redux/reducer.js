import { initialState } from "../initialState";
import { GEN_BUTTON, GEN_NEW_ANS, CLEAR_SCREEN, BACK_SPACE } from "./types";

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case GEN_BUTTON:
      return {
        ...state,
        ...payload,
        number: state.number.concat(action.payload),
      };

    case GEN_NEW_ANS:
      try {
        return {
          ...state,
          ...payload,
          answer: eval(state.number).toString(),
        };
      } catch (error) {
        return {
          ...state,
          ...payload,
          answer: "E",
        };
      }

    case CLEAR_SCREEN:
      return {
        ...state,
        ...payload,
        initialState,
      };

    case BACK_SPACE:
      return {
        ...state,
        ...payload,
        number: state.number.slice(0, -1),
        answer: "",
      };

    default:
      return initialState;
  }
};
