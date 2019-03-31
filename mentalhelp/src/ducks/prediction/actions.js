import {
  AGE_CHANGED,
  SEX_CHANGED,
  WEIGHT_CHANGED,
  HEIGHT_CHANGED,
  SMOKING_HABITS_CHANGED,
  COMMUNAL_BELONGING_CHANGED,
  PERCEIVED_HEALTH_CHANGED,
  PERCEIVED_MENTAL_HEALTH_CHANGED,
  PHYSICAL_ACTIVITY_CHANGED,
  LIFE_SATISFACTION_CHANGED,
  MOOD_STABILITY_CHANGED,
  LIFE_STRESS_CHANGED,
  FRUIT_VEGETABLE_CONSUMPTION_CHANGED
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

export const weightChanged = input => async dispatch => {
  dispatch({
    type: WEIGHT_CHANGED,
    payload: input
  });
};


export const heightChanged = input => async dispatch => {
  dispatch({
    type: HEIGHT_CHANGED,
    payload: input
  });
};

export const smokingHabitsChanged = input => async dispatch => {
  dispatch({
    type: SMOKING_HABITS_CHANGED,
    payload: input
  });
};

export const communalBelongingChanged = input => async dispatch => {
  console.log(input);
  dispatch({
    type: COMMUNAL_BELONGING_CHANGED,
    payload: input
  });
};

export const lifeSatisfactionChanged = input => async dispatch => {
  dispatch({
    type: LIFE_SATISFACTION_CHANGED,
    payload: input
  });
};

export const fruitVegetableConsumptionChanged = input => async dispatch => {
  dispatch({
    type: FRUIT_VEGETABLE_CONSUMPTION_CHANGED,
    payload: input
  });
};

export const lifeStressChanged = input => async dispatch => {
  dispatch({
    type: LIFE_STRESS_CHANGED,
    payload: input
  });
};

export const moodStabilityChanged = input => async dispatch => {
  dispatch({
    type: MOOD_STABILITY_CHANGED,
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
  physicalActivityChanged,
  weightChanged,
  heightChanged,
  fruitVegetableConsumptionChanged,
  lifeStressChanged,
  lifeSatisfactionChanged,
  moodStabilityChanged,
  communalBelongingChanged,
  smokingHabitsChanged
};
