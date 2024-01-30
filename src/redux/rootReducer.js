import { combineReducers } from "redux";
import { CALC_KEY, reducer } from "./calc-redux/reducer";

export const rootReducer = combineReducers({
  [CALC_KEY]: reducer,
});
