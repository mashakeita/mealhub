import React, { useState, useEffect } from "react";
import {
  faBars,
  faTimes,
  faPizzaSlice,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Header.scss";

const Header = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const thisButton = () => {
    if (window.innerWidth <= 768) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    thisButton();
  }, []);

  window.addEventListener("resize", thisButton);

  return (
    <>
      <nav className="header">
        <div className="header__container">
          <Link to="/" className="header__title" onClick={closeMenu}>
            MealHub
            <FontAwesomeIcon icon={faUtensils} className="header__logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon
              icon={click ? faTimes : faBars}
              className="header__icons"
            />
          </div>
          <ul className={click ? "header__menu active" : "header__menu"}>
            <li className="header__item">
              <Link to="/" className="header__links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="header__item">
              <Link
                to="/recipies"
                className="header__links"
                onClick={closeMenu}
              >
                Recipies
              </Link>
            </li>
            <li className="header__item">
              <Link
                to="/create-recipe"
                className="header__links"
                onClick={closeMenu}
              >
                My Recipies
              </Link>
            </li>
            <li className="header__item">
              {/* <Link
                to="/sign-up"
                className="header__links-mobile"
                onClick={closeMenu}
              >
                Sign Up
              </Link> */}
            </li>
          </ul>
          {/* {button && <Button buttonFormat="btn--outline">SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
};

export default Header;
