import Input from "./input";
import React from "react";
import TextInput from './text-input'
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
  lifeStressChanged
}) => {
  console.log(communalBelonging, "jsx")
  return (
    <div className="row">
      <div className="col-sm-2 side-spacer" />

      <div className="col-sm-8 page">
      
      <TextInput
          onChange={heightChanged}
          question={"Please enter your height in centimeters:"}
          value={height}
        />
        <TextInput
          onChange={weightChanged}
          question={"Please enter your weight in kilograms:"}
          value={weight}
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
          question={"Please select your age:"}
          renderedButton={smokingHabits}
        />
        

        <Input
          selection={physicalActivityChanged}
          question={"How much are you exercising a week?"}
          labels={["More than 150 minutes a week", "Less than 60 minutes a day"]}
          renderedButton={physicalActivity}
        />

        <Input
          selection={fruitVegetableConsumptionChanged}
          labels={["Under 18", "Over 18"]}
          question={"Please select your age:"}
          renderedButton={fruitVegetableConsumption}
        />
        <SliderInput
          selection={perceivedMentalHealthChanged}
          question={"How are you feeling today?"}
          value={perceivedMentalHealth}
        />

        <SliderInput
          selection={perceivedHealthChanged}
          question={"How is your overall health today?"}
          value={perceivedHealth}
        />

        <SliderInput
          selection={lifeStressChanged}
          question={"How would you rate your stress levels?"}
          value={lifeStress}
        />

        <SliderInput
          selection={lifeSatisfactionChanged}
          question={"How would you rate your general satisfaction?"}
          value={lifeSatisfaction}
        />
        <SliderInput
          selection={communalBelongingChanged}
          question={"How would you rate your communal belonging?"}
          value={communalBelonging}
        />

        <SliderInput
          selection={moodStabilityChanged}
          question={"How would you rate your mood stability?"}
          value={moodStability}
        />

        <Input
          selection={physicalActivityChanged}
          question={"How much are you exercising a week?"}
          labels={["More than 150 minutes a week", "Less than 60 minutes a day"]}
          renderedButton={physicalActivity}
        />
      </div>
      <div className="col-sm-2 side-spacer" />
    </div>
  );
};

export default InputScreenPage;
