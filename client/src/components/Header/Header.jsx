import React, { Component, NavLink } from "react";
import { NavItems } from "../NavItems/NavItems";
import { Link } from "react-router-dom";
import logo from "../../assets/images/salad.png";
import "../Header/Header.scss";
import {
  faBars,
  faTimes,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <header className="header">
        {/* <Link to="/"> */}
        <h1 className="header__title">
          Meal Hub{" "}
          <FontAwesomeIcon icon={faPizzaSlice} className="header__logo" />
        </h1>
        {/* </Link> */}
        <div className="nav-icon" onClick={this.handleClick}>
          <FontAwesomeIcon
            icon={this.state.clicked ? faTimes : faBars}
            className="header__icons"
          />
        </div>
        <ul
          className={
            this.state.clicked ? "header__menu active" : "header__menu"
          }
        >
          {NavItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.className} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </header>
    );
  }
}

export default Header;
