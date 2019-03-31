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
      <div className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Your Results</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
				<h4>What's Your Potential?</h4>
				<div className="full-w container-fluid">
					<div role="tooltip" className="tooltip top custom-tooltip " style={{left:currentRating+'%'}}>
						<div className="tooltip-arrow"></div>
						<div className="tooltip-inner">You are Here</div>
					</div>
					<hr />
					<div role="tooltip" className="tooltip bottom custom-tooltip " style={{left:potentialRating+'%'}}>
						<div className="tooltip-arrow"></div>
						<div className="tooltip-inner">You Could be Here</div>
					</div>
				</div>
             
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
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
