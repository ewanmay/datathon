import React from "react";

const TextInput = ({ selection, labels, question, renderedButton }) => {
  return (
    <div className="input-container">
      <div className="input-question-text">{question}</div>
      <input
        type="text"
        class="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="addon-wrapping"
      />
    </div>
  );
};

export default TextInput;
