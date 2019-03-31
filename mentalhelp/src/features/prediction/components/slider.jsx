import React from "react";
import Slider from "@material-ui/lab/Slider";
const SliderInput = ({ selection, value, question, step, unit }) => {
  return (
    <div className="slider-input-container">
      <div className="input-question-text">{question}   {Math.trunc(value)}{unit}</div>
      <div className="slider-container">
        <Slider
          value={value}
          aria-labelledby="label"
          onChange={(event, value) =>  selection(value)}
          step={step}
        />
        
      </div>
    </div>
  );
};

export default SliderInput;
