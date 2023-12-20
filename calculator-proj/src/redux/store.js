import { createStore } from "redux";
import { reducer } from "./calc-redux/reducer";

export const store = createStore(reducer);
