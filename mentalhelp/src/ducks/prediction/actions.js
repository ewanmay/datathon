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
  FORM_SUBMIT_SUCCESS,
  BLOOD_PRESSURE_CHANGED,
  FORM_ERROR,
  FORM_ERROR_RESET,
  UPDATE_MODAL_INFO,
  MODAL_TOGGLE
} from "./types";

import axios from "axios";

export const bloodPressureChanged = bloodPressure => async dispatch => {
  dispatch({
    type: BLOOD_PRESSURE_CHANGED,
    payload: bloodPressure
  });
};

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
export const closeModal = async dispatch => {
  dispatch({
    type: MODAL_TOGGLE,
    payload: false
  });
};
export const formSubmit = form => async dispatch => {
  dispatch({
    type: FORM_ERROR_RESET
  });
  console.log(form);
  let errorMessage = "";
  console.log(
    form.bloodPressure.split(","),
    Number.isNaN(form.bloodPressure.split(",")[1]),
    Number.isNaN(form.bloodPressure.split(",")[1]),
    form.bloodPressure.split(",").length > 0
  );

  errorMessage =
    !Number.isNaN(parseInt(form.weight, 10)) && !form.weight.length > 0
      ? "Weight is not a number"
      : !Number.isNaN(parseInt(form.height, 10)) && !form.height.length > 0
      ? "Height is not a number"
      : !form.communalBelonging > 0
      ? "Please select a communal belonging rating above 0"
      : !form.lifeSatisfaction > 0
      ? "Please select a life satisfaction rating above 0"
      : !form.lifeStress > 0
      ? "Please select a life stress rating above 0"
      : !form.perceivedHealth > 0
      ? "Please select a perceived health rating above 0"
      : !form.perceivedMentalHealth > 0
      ? "Please select a physical activity rating above 0"
      : !form.moodStability > 0
      ? "Please select a mood stability rating greater than 0"
      : !form.bloodPressure.split(",").length > 0
        // !Number.isNaN(form.bloodPressure.split(",")[0]) &&
        // !Number.isNaN(form.bloodPressure.split(",")[1])
      ? "Please format blood pressure properly, such as '130,80'"
      : "";

  if (errorMessage.length > 0) {
    dispatch({
      type: FORM_ERROR,
      payload: errorMessage
    });
  } else {
    axios.post("http://127.0.0.1:5000/predict", { form }).then(result => {
<<<<<<< HEAD
      console.log(result.data.prediction); // [0.56, 0.78]
      console.log(result.data.reccomendation);  // [+0.3, -0.2, +0.02, -0.9...]
      console.log(result.data.str_recc);  // ["Eat more!", "Lower your blood pressure!"]

=======
      console.log(result.data.prediction);
      alert(result.data.reccomendation);
      alert(result.data.str_recc);
      dispatch({
        type: UPDATE_MODAL_INFO,
        payload: {
          improvementStrings: result.data.str_recc,
          currentRating: result.data.prediction[0],
          potentialRating: result.data.prediction[1]
        }
      });
      dispatch({
        type: MODAL_TOGGLE,
        payload: true
      });
>>>>>>> origin/master
      dispatch({
        type: FORM_SUBMIT_SUCCESS,
        payload: result.data.response
      });
    });
  }
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
  smokingHabitsChanged,
  bloodPressureChanged,
  formSubmit,
  closeModal
};
