import React from "react";

const input = ({ selection, labels, question, renderedButton }) => {
  const buttons = labels.map((label, index) => {
    if (renderedButton && renderedButton == label) {
      return (
        <div className="button-container">
          <button
            type="button"
            className="btn btn-outline-primary active"
            key={label}
          >
            {label}
          </button>
        </div>
      );
    } else {
      return (
        <div className="button-container" key={label}>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => selection(label)}
          >
            {label}
          </button>
        </div>
      );
    }
  });
  return (
    <div className="input-container">
      <div className="input-question-text">{question}</div>
      {buttons}
    </div>
  );
};

export default input;
