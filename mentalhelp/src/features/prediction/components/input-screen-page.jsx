import Input from "./input";
import React from "react";
import TextInput from "./text-input";
import SliderInput from "./slider";
const InputScreenPage = ({
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
  fruitVegetableConsumption,
  bloodPressure,
  formError,  
  improvementStrings,
  currentRating,
  modalOpen,
  potentialRating,

  //functions
  bloodPressureChanged,
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
  submitForm
}) => {
  return (
    <div className="row">
      <div className="col-sm-2 side-spacer" />

      <div className="col-sm-8 page">
        <TextInput
          onChange={heightChanged}
          question={"Please enter your height in centimeters:"}
          placeHolder={"i.e 152"}
          value={height}
        />
        <TextInput
          onChange={weightChanged}
          question={"Please enter your weight in kilograms:"}
          placeHolder={"i.e 56"}
          value={weight}
        />

        <TextInput
          onChange={bloodPressureChanged}
          question={"Please enter your blood pressure (systolic, diastolic):"}
          placeHolder={"i.e 130,80"}
          value={bloodPressure}
        />

        <Input
          selection={sexChanged}
          labels={["Female", "Other", "Male"]}
          question={"Please enter your gender"}
          renderedButton={sex}
        />

        <Input
          selection={ageChanged}
          labels={["Under 18", "Over 18"]}
          question={"Please select your age group:"}
          renderedButton={age}
        />
        <Input
          selection={smokingHabitsChanged}
          labels={["Daily", "Occasional", "Never"]}
          question={"Please select how often you smoke:"}
          renderedButton={smokingHabits}
        />
        <Input
          selection={fruitVegetableConsumptionChanged}
          labels={["1", "2", "3", "4", "5+"]}
          question={"How many servings of fruits and vegetables do you eat a day on average?"}
          renderedButton={fruitVegetableConsumption}
        />

        <Input
          selection={perceivedHealthChanged}
          question={"How healthy would you rate your current lifestyle?"}
          labels={["Very unhealthy", "Slightly unhealthy", "Average", "Somewhat Healthy", "Very Healthy"]}
          renderedButton={perceivedHealth}
        />

        <Input
          selection={lifeStressChanged}
          question={"How would you rate your average stress level?"}
          labels={["Very calm", "Slightly calm", "Average", "Somewhat stressful", "Very stressful"]}
          renderedButton={lifeStress}
        />

        <Input
          selection={lifeSatisfactionChanged}
          question={"How would you rate your general satisfaction in life?"}
          labels={["Very Unatisfying", "Slightly Unsatisfying", "Average", "Somewhat Satisfying", "Very Satisfying"]}
          renderedButton={lifeSatisfaction}
        />
        <Input
          selection={communalBelongingChanged}
          question={"How well do you think you fit in with your community?"}
          labels={["Don't fit all", "Kind of don't fit in", "Neutral", "Somewhat fit in", "Fit in great"]}
          renderedButton={communalBelonging}
        />

        <Input
          selection={moodStabilityChanged}
          question={"How would you rate your mood stability?"}
          labels={["Very Unstable", "Somewhat Unstable", "Neutral", "Fairly Stable", "Very Stable"]}
          renderedButton={moodStability}
        />

        <Input
          selection={physicalActivityChanged}
          question={"How much do you exercise a week?"}
          labels={["30 minutes", "60 minutes", "90 minutes", "120 minutes", "150 minutes"]}
          renderedButton={physicalActivity}
        />
        <div className="submission">
          <div className="button-container">
            <button
              type="button"
              className="btn btn-outline-primary active"
              key={123123123}
              onClick={() => {
                submitForm({
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
                  fruitVegetableConsumption,
                  bloodPressure
                });
              }}
            >
              Submit
            </button>

            <div className="form-error">{formError}</div>
          </div>
        </div>
      </div>
      <div className="col-sm-2 side-spacer" />
    </div>
  );
};

export default InputScreenPage;
