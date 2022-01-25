import React, { useState } from "react";
import { Button } from "../Button/Button";
import "../../styles/App.scss";
import "./Hero.scss";
import { Link } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";

function Hero() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="hero">
      <video src="/videos/foodsreel.mp4" autoPlay loop muted />
      <h1 className="hero__title">RECIPIES YOU'LL LOVE</h1>
      <p className="hero__text">Made right at home</p>
      <div className="hero-btns">
        <Link className="btns btn--outline btn--large" to="/recipies">
          BROWSE RECIPIES
        </Link>

        <Button
          onClick={openModal}
          className="btns"
          buttonFormat="btn--outline"
          buttonSize="btn--large"
        >
          SIGN UP NOW
        </Button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Hero;
