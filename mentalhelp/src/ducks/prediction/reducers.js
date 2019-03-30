import { AnyAction } from "redux";
import reduceReducers from "reduce-reducers";
import { RETRIEVED_PANTRY_GROUP } from "./types";
import {
  AGE_CHANGED,
  SEX_CHANGED,
  PERCEIVED_HEALTH_CHANGED,
  PERCEIVED_MENTAL_HEALTH_CHANGED,
  PHYSICAL_ACTIVITY_CHANGED
} from "./types";
export const initialFormState = {
  age: "",
  sex: "",
  perceivedHealth: "",
  perceivedMentalHealth: "",
  physicalActivity: ""
};

const formReducer = (state = initialFormState, action) => {
  switch (action.type) {
    case AGE_CHANGED:
      return { ...state, age: action.payload };
    case SEX_CHANGED:
      return {
        ...state,
        sex: action.payload
      };
    case PERCEIVED_HEALTH_CHANGED:
      return {
        ...state,
        perceivedHealth: action.payload
      };
    case PERCEIVED_MENTAL_HEALTH_CHANGED:
      return {
        ...state,
        perceivedMentalHealth: action.payload
      };
    case PHYSICAL_ACTIVITY_CHANGED:
      return {
        ...state,
        physicalActivity: action.payload
      };
    default:
      return state;
  }
};
export default reduceReducers(formReducer);
