import React, { useState, useRef, useEffect, useCallback } from "react";
import "../Modal/Modal.scss";
import SignupForm from "../SignupForm/SignupForm";
import FormSuccess from "./FormSuccess";

export const Modal = ({ showModal, setShowModal }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div className="form-container" showModal={showModal}>
          <span
            onClick={closeModal}
            onClick={() => setShowModal((prev) => !prev)}
            className="close-btn"
          >
            ×
          </span>
          <div className="form-content-left">
            <img className="form-img" src="img/mealprep.jpg" alt="spaceship" />
          </div>
          {!formSubmitted ? (
            <SignupForm submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
      ) : null}
    </>
  );
};
