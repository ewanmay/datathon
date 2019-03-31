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
  FRUIT_VEGETABLE_CONSUMPTION_CHANGED,
  FORM_SUBMIT_SUCCESS
} from "./types";

import axios from 'axios'

export const sexChanged = input => async dispatch => {
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

export const formSubmit = form => async dispatch => {
  console.log(form);
  let errorMessage = "";
  errorMessage = !Number.isNaN(parseInt(form.weight,10)) ? "Weight is not a number" : "";
  errorMessage = !Number.isNaN(parseInt(form.height,10)) ? "Height is not a number" : "";
  errorMessage = !form.communalBelonging > 0 ? "Please select a communal belonging rating above 0" : "";
  errorMessage = !form.lifeSatisfaction > 0 ? "Please select a life satisfaction rating above 0" : "";
  errorMessage = !form.lifeStress > 0 ? "Please select a life stress rating above 0" : "";
  errorMessage = !form.perceivedHealth > 0 ? "Please select a perceived health rating above 0" : "";
  errorMessage = !form.perceivedMentalHealth > 0 ? "Please select a perceived mental health rating above 0" : "";
  errorMessage = !form.perceivedMentalHealth > 0 ? "Please select a physical activity rating above 0" : "";
  errorMessage = !form.moodStability > 0 ? "Please select a mood stability rating greater than 0" : "";
  errorMessage = !form.age.length > 0 ? "Please select an age category" : "";
  errorMessage = !form.smokingHabits.length > 0 ? "Please select a smoking habits category" : "";
  errorMessage = !form.sex.length > 0 ? "Please select a gender" : "";
 
  

  axios.post('http://127.0.0.1:5000/predict', {form}).then((result) => {
    console.log(result);
    console.log(result.data.response[0])
    alert(result.data.response)
    alert(result.data.str_recc)
  });
  dispatch({
    type: FORM_SUBMIT_SUCCESS
  })
}

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
  smokingHabitsChanged,
  formSubmit
};
