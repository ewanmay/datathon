import React from "react";

const modalBoi = ({
	currentRating,
	potentialRating,
	improvementStrings
}) => {
	let mClose = () => this.setState({ modalOpen: false });

	let curr_place = "left:"
    return (
	    <Modal 
	      	show={modalOpen} 
	        size="lg"
	        aria-labelledby="contained-modal-title-vcenter"
	        centered
	    >
	        <Modal.Header closeButton>
	          <Modal.Title id="contained-modal-title-vcenter">
	            Your Results
	          </Modal.Title>
	        </Modal.Header>
	        <Modal.Body>
				<h4>What's Your Potential?</h4>
				<div class="full-w container-fluid">
					<div role="tooltip" class="tooltip top custom-tooltip " style={curr_place}>
						<div class="tooltip-arrow"></div>
						<div class="tooltip-inner">You are Here</div>
					</div>
				</div>
				<p>
					
				</p>
	        </Modal.Body>
	        <Modal.Footer>
	          <Button onClick={mClose}>Close</Button>
	        </Modal.Footer>
	    </Modal>
    );
}

// const prediction_modal = ({}) => {
//     return (
//         <MyVerticallyCenteredModal
          
//           onHide={modalClose}
//         />
// 	);
// };

export default modalBoi;

