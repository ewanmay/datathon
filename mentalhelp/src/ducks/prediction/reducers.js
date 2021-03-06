import reduceReducers from "reduce-reducers";
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
  BLOOD_PRESSURE_CHANGED,
  FORM_ERROR,
  FORM_ERROR_RESET,
  UPDATE_MODAL_INFO,
  MODAL_TOGGLE
} from "./types";
export const initialFormState = {
  sex: 0,
  age: 0,
  bloodPressure: "130,80",
  height: "152",
  weight: "59",
  fruitVegetableConsumption: 2,
  smokingHabits: 2,
  formError: "",

  communalBelonging: 2,
  lifeSatisfaction: 2,
  lifeStress: 2,
  moodStability: 2,
  perceivedHealth: 2,
  perceivedMentalHealth: 2,
  physicalActivity: 2,
  modalOpen: false,
  improvementStrings: [],
  currentRating: 0,
  potentialRating: 0
};

const formReducer = (state = initialFormState, action) => {
  switch (action.type) {
    case AGE_CHANGED:
      return { ...state, age: action.payload };
    case WEIGHT_CHANGED:
      return { ...state, weight: action.payload };
    case HEIGHT_CHANGED:
      return { ...state, height: action.payload };
    case SMOKING_HABITS_CHANGED:
      return { ...state, smokingHabits: action.payload };
    case COMMUNAL_BELONGING_CHANGED:
      return { ...state, communalBelonging: action.payload };
    case LIFE_SATISFACTION_CHANGED:
      return { ...state, lifeSatisfaction: action.payload };
    case LIFE_STRESS_CHANGED:
      return { ...state, lifeStress: action.payload };
    case MOOD_STABILITY_CHANGED:
      return { ...state, moodStability: action.payload };
    case FRUIT_VEGETABLE_CONSUMPTION_CHANGED:
      return { ...state, fruitVegetableConsumption: action.payload };
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
    case BLOOD_PRESSURE_CHANGED: 
      return {
        ...state,
        bloodPressure: action.payload
      }
    case FORM_ERROR: 
      return {
        ...state,
        formError: action.payload
      }
    case FORM_ERROR_RESET:
      return {
        ...state,
        formError: ''
      }
    case MODAL_TOGGLE: 
      return {
        ...state,
        modalOpen: action.payload
      }
    case UPDATE_MODAL_INFO:
      return {
        ...state,
        improvementStrings: action.payload.improvementStrings,
        potentialRating: action.payload.potentialRating,
        currentRating: action.payload.currentRating
      }
    default:
      return state;
  }
};
export default reduceReducers(formReducer);
