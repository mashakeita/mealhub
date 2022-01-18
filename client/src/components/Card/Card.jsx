import React from "react";

const Card = (props) => {
  return (
    <div className="image__card">
      <img
        className="image__source"
        id={props.id}
        src={props.picture}
        alt="image carousel"
      />
    </div>
  );
};

export default Card;
