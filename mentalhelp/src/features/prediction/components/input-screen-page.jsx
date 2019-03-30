import Input from "./input";
import React from "react";
const InputScreenPage = ({
  sexChanged,
  ageChanged,
  perceivedHealthChanged,
  perceivedMentalHealthChanged,
  physicalActivityChanged,
  sex,
  age,
  perceivedHealth,
  perceivedMentalHealth,
  physicalActivity
}) => {
    console.log(sex);
  return (
    <div className="row">
      <div className="col-sm-2 side-spacer" />

      <div className="col-sm-8 page">
        <Input
          selection={sexChanged}
          labels={["Female", "Male", "Other"]}
          question={"Please enter your gender"}
          renderedButton={sex}
        />
        
        <Input
          selection={ageChanged}
          labels={["Under 18", "18 - 30", "31 - 40", "41 - 50", "Over 50"]}
          question={"Please select your age:"}
          renderedButton={age}
        />
        
        <Input
          selection={perceivedMentalHealthChanged}
          labels={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
          question={"How are you feeling today?"}
          renderedButton={perceivedMentalHealth}
        />
        
        <Input
          selection={perceivedHealthChanged}
          labels={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
          question={"How is your overall health today?"}
          renderedButton={perceivedHealth}
        />
        
        <Input
          selection={physicalActivityChanged}
          labels={[" Less than 1 hour", "1 - 2 hours", "2 - 4 hours", "4 - 8 Hours", "Over 8 hours"]}
          question={"How much are you exercising a week?"}
          renderedButton={physicalActivity}
        />
      </div>
      <div className="col-sm-2 side-spacer" />
    </div>
    
  );
};

export default InputScreenPage;
