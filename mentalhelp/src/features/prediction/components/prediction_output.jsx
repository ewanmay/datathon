import React from "react";
import SliderInput from "./slider";
const modalBoi = ({
  currentRating,
  potentialRating,
  improvementStrings,
  modalOpen,
  modalClose
}) => {
  let current_place = Math.trunc(currentRating *100);
  let potential_place = Math.trunc(potentialRating *100);
  
  console.log(modalOpen);
  if (true) {
    const strings = improvementStrings.map(string => {
      return (
        <h5>
        {string}
        </h5>)
    })
    return (
            <div className="d-block full-w ">
              <h5 className="title">Your Results</h5>
              <div>
                  <h4>What's Your Potential?</h4>
                  <div className="full-w position-relative big-boi contyBoi">
                  <hr className="position-absolute middle bigHR" />
                    <div role="tooltip" className="position-absolute custom-tooltip topC" style={{left:100.0*currentRating+'%'}}>
                      <div className="tooltip-arrow"></div>
                      <div className="tooltip-inner">You are Here {current_place}/100</div>
                    </div>
                  
                    <div role="tooltip" className="position-absolute custom-tooltip botC" style={{left:100.0*potentialRating+'%'}}>
                      <div className="tooltip-arrow"></div>
                      <div className="tooltip-inner">You Could be Here {potential_place}/100</div>
                    </div>
                  </div>
                  <h4>To get there, try:...</h4>
                  {strings}
              </div>
                
              </div>
    );
  } else {
    return <div />;
  }
};

export default modalBoi;
