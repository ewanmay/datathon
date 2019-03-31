import React from "react";
import SliderInput from "./slider";
const modalBoi = ({
  currentRating,
  potentialRating,
  improvementStrings,
  modalOpen,
  modalClose
}) => {
  let current_place = "left: " + currentRating + "%;";
  let potential_place = "left: " + potentialRating + "%;";
  
  console.log(modalOpen);
  if (modalOpen) {
    return (
      <div classNameName="modal fade" zIndex='1' tabIndex="-1" role="dialog">
        <div classNameName="modal-dialog" role="document">
          <div classNameName="modal-content">
            <div classNameName="modal-header">
              <h5 classNameName="modal-title">Your Results</h5>
              <button
                type="button"
                classNameName="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div classNameName="modal-body">
              <SliderInput
                selection={() => {}}
                question={"Your current mental health rating:"}
                value={currentRating}
                step={1}
                unit={"/100"}
              />
            </div>
            <div classNameName="modal-footer">
              <button type="button" classNameName="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                classNameName="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => modalClose()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};

export default modalBoi;
