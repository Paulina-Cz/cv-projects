import React from "react";

const RegexInput = (props) => {
  const {
    labelName,
    inputId,
    inputType,
    inputValue,
    inputOnChange,
    errorMessage,
  } = props;

  return (
    <>
      <label htmlFor={inputId}>{labelName}</label>
      <input
        id={inputId}
        type={inputType}
        value={inputValue}
        onChange={inputOnChange}
      />
      <span>{errorMessage}</span>
    </>
  );
};

export default RegexInput;
