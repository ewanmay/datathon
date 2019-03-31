import InputFormScreen from "../components/input-screen-page";
import predictionActions from "../../../ducks/prediction/actions";
import { connect } from "react-redux";

const mapStateToProps = ({ prediction }) => {
  const {
    sex,
    age,
    perceivedHealth,
    perceivedMentalHealth,
    physicalActivity,
    height,
    weight,
    smokingHabits,
    communalBelonging,
    fruitVegetableConsumption,
    lifeSatisfaction,
    moodStability,
    lifeStress,
    bloodPressure
  } = prediction;
  console.log(communalBelonging)
  return {
    sex,
    age,
    height,
    weight,
    perceivedHealth,
    perceivedMentalHealth,
    physicalActivity,
    smokingHabits,
    communalBelonging,
    lifeSatisfaction,
    lifeStress,
    moodStability,
    fruitVegetableConsumption
  };
};
const mapDispatchToProps = dispatch => {
  const {
    sexChanged,
    ageChanged,
    perceivedHealthChanged,
    perceivedMentalHealthChanged,
    physicalActivityChanged,
    smokingHabitsChanged,
    fruitVegetableConsumptionChanged,
    communalBelongingChanged,
    moodStabilityChanged,
    lifeSatisfactionChanged,
    weightChanged,
    heightChanged,
    lifeStressChanged,
    bloodPressureChanged,
    formSubmit
  } = predictionActions;
  return {
    sexChanged: sex => {
      dispatch(sexChanged(sex));
    },
    ageChanged: age => {
      dispatch(ageChanged(age));
    },
    perceivedHealthChanged: health => {
      dispatch(perceivedHealthChanged(health));
    },
    perceivedMentalHealthChanged: mentalHealth => {
      dispatch(perceivedMentalHealthChanged(mentalHealth));
    },
    physicalActivityChanged: physicalActivity => {
      dispatch(physicalActivityChanged(physicalActivity));
    },
    smokingHabitsChanged: metric => {
      dispatch(smokingHabitsChanged(metric))
    },
    fruitVegetableConsumptionChanged: metric => {
      dispatch(fruitVegetableConsumptionChanged(metric))
    },
    communalBelongingChanged: metric => {
      dispatch(communalBelongingChanged(metric))
    },
    lifeSatisfactionChanged: metric => {
      dispatch(lifeSatisfactionChanged(metric))
    },
    moodStabilityChanged: metric => {
      dispatch(moodStabilityChanged(metric))
    },
    lifeStressChanged: metric => {
      dispatch(lifeStressChanged(metric))
    },
    heightChanged: metric => {
      dispatch(heightChanged(metric))
    },    
    weightChanged: metric => {
      dispatch(weightChanged(metric))
    },
    bloodPressureChanged: metric => {
      dispatch(bloodPressureChanged(metric))
    },
    submitForm: form => {
      dispatch(formSubmit(form))
    }

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFormScreen);
