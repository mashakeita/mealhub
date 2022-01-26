import React from "react";
import { Link } from "react-router-dom";
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
              <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="social__rights">MealHub © 2020</small>
          <div className="social__icons">
            <Link
              className="social__icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social__icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social__icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social__icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social__icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
