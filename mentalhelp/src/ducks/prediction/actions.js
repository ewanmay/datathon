import {
  AGE_CHANGED,
  SEX_CHANGED,
  PERCEIVED_HEALTH_CHANGED,
  PERCEIVED_MENTAL_HEALTH_CHANGED,
  PHYSICAL_ACTIVITY_CHANGED
} from "./types";

export const sexChanged = input => async dispatch => {
  console.log(input)
  dispatch({
    type: SEX_CHANGED,
    payload: input
  });
};

export const ageChanged = input => async dispatch => {
  dispatch({
    type: AGE_CHANGED,
    payload: input
  });
};

export const perceivedHealthChanged = input => async dispatch => {
  dispatch({
    type: PERCEIVED_HEALTH_CHANGED,
    payload: input
  });
};

export const perceivedMentalHealthChanged = input => async dispatch => {
  dispatch({
    type: PERCEIVED_MENTAL_HEALTH_CHANGED,
    payload: input
  });
};

export const physicalActivityChanged = input => async dispatch => {
  dispatch({
    type: PHYSICAL_ACTIVITY_CHANGED,
    payload: input
  });
};

export default {
  sexChanged,
  ageChanged,
  perceivedHealthChanged,
  perceivedMentalHealthChanged,
  physicalActivityChanged
};
