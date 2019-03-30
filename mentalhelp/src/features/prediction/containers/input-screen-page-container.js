import InputFormScreen from "../components/input-screen-page";
import predictionActions from "../../../ducks/prediction/actions";
import { connect } from "react-redux";

const mapStateToProps = ({ prediction }) => {
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFormScreen);
