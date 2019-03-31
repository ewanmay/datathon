import React from "react";
import Slider from "@material-ui/lab/Slider";
const SliderInput = ({ selection, value, question }) => {
    console.log(value, question);
  return (
    <div className="slider-input-container">
      <div className="input-question-text">{question}</div>
      <div className="slider-container">
        <Slider
          value={value}
          aria-labelledby="label"
          onChange={(event, value) =>  selection(value)}
        />
      </div>
    </div>
  );
};

export default SliderInput;
