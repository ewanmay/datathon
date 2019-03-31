import React from "react";

const TextInput = ({ onChange, placeHolder, question, value }) => {
  return (
    <div className="input-container">
      <div className="input-question-text">{question}</div>
      <input
        type="text"
        className="form-control"
        placeholder={placeHolder}
        value={value}
        aria-label="Username"
        aria-describedby="addon-wrapping"
        onChange={event => onChange(event.target.value)}
      />
    </div>
  );
};

export default TextInput;
