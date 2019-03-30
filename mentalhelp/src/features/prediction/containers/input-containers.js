import InputFormScreen from "../components/input-screen-page";
import predictionActions from "../../../ducks/prediction/actions";
import { connect } from "react-redux";

const mapStateToProps = (item) => {
console.log(item)
  const {prediction} = item;
  const {
    sex,
    age,
    perceivedHealth,
    perceivedMentalHealth,
    physicalActivity
  } = prediction;

  return {
    sex,
    age,
    perceivedHealth,
    perceivedMentalHealth,
    physicalActivity
  };
};

const mapDispatchToProps = dispatch => {
  const {
    sexChanged,
    ageChanged,
    perceivedHealthChanged,
    perceivedMentalHealthChanged,
    physicalActivityChanged
  } = predictionActions;
  return {
    sexChanged,
    ageChanged,
    perceivedHealthChanged,
    perceivedMentalHealthChanged,
    physicalActivityChanged
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFormScreen);
