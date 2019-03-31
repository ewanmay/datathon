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
  FRUIT_VEGETABLE_CONSUMPTION_CHANGED
} from "./types";
export const initialFormState = {
  sex: "",
  age: "",
  height: "",
  weight: "",
  physicalActivity: "",
  smokingHabits: "",
  communalBelonging: 0,
  lifeSatisfaction: 0,
  lifeStress: 0,
  moodStability: 0,
  perceivedHealth: 0,
  perceivedMentalHealth: 0,
  fruitVegetableConsumption: ""
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
    default:
      return state;
  }
};
export default reduceReducers(formReducer);
