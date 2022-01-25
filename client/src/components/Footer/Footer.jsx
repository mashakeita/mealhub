import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer__container">
      <div class="footer__links">
        <div className="footer__link-wrapper">
          <div class="footer__link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">Sign Up</Link>
            <Link to="/">Reviews</Link>
            <Link to="/">History</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer__link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Recipies</Link>
            <Link to="/">Meals</Link>
          </div>
        </div>
        <div className="footer__link-wrapper">
          <div class="footer__link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social__media">
        <div class="social__media-wrap">
          <div class="footer__logo">
            <Link to="/" className="social__logo">
              MealHub
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="social__rights">MealHub © 2020</small>
          <div class="social__icons">
            <Link
              class="social__icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social__icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social__icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social__icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social__icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
