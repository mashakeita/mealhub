import React from "react";
import { Link } from "react-router-dom";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__links">
        <div className="footer__link-wrapper">
          <div className="footer__link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">Sign Up</Link>
            <Link to="/">Reviews</Link>
            <Link to="/">History</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer__link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Recipies</Link>
            <Link to="/">Meals</Link>
          </div>
        </div>
        <div className="footer__link-wrapper">
          <div className="footer__link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social__media">
        <div className="social__media-wrap">
          <div className="footer__logo">
            <Link to="/" className="social__logo">
              MealHub
              <FontAwesomeIcon icon={faPizzaSlice} className="header__logo" />
            </Link>
          </div>
          <small className="social__rights">MealHub © 2020</small>
          <div className="social__icons">
            <Link
              className="social__icon-link facebook"
              to="https://www.facebook.com/"
              target="_blank"
              aria-label="Facebook"
            >
              <img className="footer__socials" src="img/icon-facebook.png" />
            </Link>
            <Link
              className="social__icon-link instagram"
              to="https://www.instagram.com/"
              target="_blank"
              aria-label="Instagram"
            >
              <img className="footer__socials" src="img/icon-instagram.png" />
            </Link>

            <Link
              className="social__icon-link twitter"
              to="https://www.twitter.com/"
              target="_blank"
              aria-label="Twitter"
            >
              <img className="footer__socials" src="img/icon-twitter.png" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
