import React from "react";
import SliderInput from "./slider";
const modalBoi = ({
  currentRating,
  potentialRating,
  improvementStrings,
  modalOpen,
  modalClose
}) => {
	let current_place = "left: " + currentRating + '%;';
	let potential_place = "left: " + potentialRating + '%;';

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
				<h4>What's Your Potential?</h4>
				<div class="full-w container-fluid">
					<div role="tooltip" class="tooltip top custom-tooltip " style={current_place}>
						<div class="tooltip-arrow"></div>
						<div class="tooltip-inner">You are Here</div>
					</div>
					<hr />
					<div role="tooltip" class="tooltip bottom custom-tooltip " style={potential_place}>
						<div class="tooltip-arrow"></div>
						<div class="tooltip-inner">You Could be Here</div>
					</div>
				</div>
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
