import React from "react";
import SliderInput from "./slider";
const modalBoi = ({
  currentRating,
  potentialRating,
  improvementStrings,
  modalOpen,
  modalClose
}) => {
  if (modalOpen) {
    return (
      <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Your Results</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <SliderInput
                selection={() => {}}
                question={"Your current mental health rating:"}
                value={currentRating}
                step={1}
                unit={"/100"}
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                class="btn btn-secondary"
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
	}
	else {
		return (
			<div></div>
		)
	}
};

export default modalBoi;
