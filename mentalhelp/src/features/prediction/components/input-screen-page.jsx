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
          question={"Please enter your blood pressure:"}
          placeHolder={"i.e 130,80"}
          value={bloodPressure}
        />

        <Input
          selection={sexChanged}
          labels={["Female", "Male", "Other"]}
          question={"Please enter your gender"}
          renderedButton={sex}
        />

        <Input
          selection={ageChanged}
          labels={["Under 18", "Over 18"]}
          question={"Please select your age:"}
          renderedButton={age}
        />
        <Input
          selection={smokingHabitsChanged}
          labels={["Daily", "Occasional", "Never"]}
          question={"Please select your smoking habits:"}
          renderedButton={smokingHabits}
        />
        <Input
          selection={fruitVegetableConsumptionChanged}
          labels={["1", "2", "3", "4", "5+"]}
          question={"How many times do you eat fruit and vegetables a day?"}
          renderedButton={fruitVegetableConsumption}
        />
        <SliderInput
          selection={perceivedMentalHealthChanged}
          question={"How are you feeling today?"}
          value={perceivedMentalHealth}
          step={0}
        />

        <SliderInput
          selection={perceivedHealthChanged}
          question={"How is your overall health today?"}
          value={perceivedHealth}
          step={1}
          unit={'/100'}
        />

        <SliderInput
          selection={lifeStressChanged}
          question={"How would you rate your stress levels?"}
          value={lifeStress}
          step={1}
          unit={'/100'}
        />

        <SliderInput
          selection={lifeSatisfactionChanged}
          question={"How would you rate your general satisfaction in life?"}
          value={lifeSatisfaction}
          step={1}
          unit={'/100'}
        />
        <SliderInput
          selection={communalBelongingChanged}
          question={"How would you rate your communal belonging?"}
          value={communalBelonging}
          step={1}
          unit={'/100'}
        />

        <SliderInput
          selection={moodStabilityChanged}
          question={"How would you rate your mood stability?"}
          value={moodStability}
          step={1}
          unit={'/100'}
        />

        <SliderInput
          selection={physicalActivityChanged}
          question={"How much are you exercising a week?"}
          value={physicalActivity}
          step={20}
          unit={' minutes a week'}
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
