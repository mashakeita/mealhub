import React from "react";
import { Button } from "../Button/Button";
import "../../styles/App.scss";
import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <video src="/videos/foodsreel.mp4" autoPlay loop muted />
      <h1 className="hero__title">RECIPIES YOU'LL LOVE</h1>
      <p className="hero__text">Made right at home</p>
      <div className="hero-button">
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          FIND RECIPIES
        </Button> */}
      </div>
    </div>
  );
}

export default Hero;
