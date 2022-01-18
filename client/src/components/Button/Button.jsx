import React from "react";
import "./Buttons.scss";

const Format = ["btn--primary", "btn--outline"];

const Sizes = ["btn--medium", "btn--large"];

const Button = ({ children, type, onClick, buttonFormat, buttonSize }) => {
  const checkButtonFormat = Format.includes(buttonFormat)
    ? buttonFormat
    : Format[0];

  const checkButtonSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[0];
  return (
    <button
      className={`btn ${checkButtonFormat} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
