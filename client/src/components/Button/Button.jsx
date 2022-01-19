import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const Format = ["btn--primary", "btn--outline"];

const Sizes = ["btn--medium", "btn--large"];

const Button = ({ children, type, onClick, buttonFormat, buttonSize }) => {
  const checkButtonFormat = Format.includes(buttonFormat)
    ? buttonFormat
    : Format[0];

  const checkButtonSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[0];
  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonFormat} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
