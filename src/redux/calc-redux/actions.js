import { GEN_NEW_ANS, GEN_BUTTON, CLEAR_SCREEN, BACK_SPACE } from "./types";

export const generateNewAns = (number) => {
  return {
    type: GEN_NEW_ANS,
    payload: number,
    info: "Calculates the new answer",
  };
};

export const generateButton = (number) => {
  return {
    type: GEN_BUTTON,
    payload: number,
    info: "Displays the button clicked",
  };
};

export const clearScreen = (number) => {
  return {
    type: CLEAR_SCREEN,
    payload: number,
    info: "Returns screen back to 0",
  };
};

export const backSpace = (number) => {
  return {
    type: BACK_SPACE,
    payload: number,
    info: "Deletes last button clicked",
  };
};
