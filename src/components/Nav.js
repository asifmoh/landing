import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div id="nav-bar">
        <a href="/">
          <img
            className="logo"
            src="https://raw.githubusercontent.com/asifmoh/asifmoh/main/assets/mclogo.svg"
            alt="logo"
          />
        </a>

        <nav>
          <NavLink
            to={process.env.PUBLIC_URL + "/"}
            className="link"
            activeClassName="active-nav"
            exact
          >
            <i className="fas fa-home fa-2x"></i>
            <div className="overlay">
              <div className="text">HOME</div>
            </div>
          </NavLink>

          <NavLink
            to={process.env.PUBLIC_URL + "/quiz"}
            className="link"
            activeClassName="active-nav"
          >
            <i className="image fas fa-question-circle fa-2x"></i>
            <div className="overlay">
              <div className="text">QUIZ</div>
            </div>
          </NavLink>



          <NavLink
            to={process.env.PUBLIC_URL + "/about"}
            className="link"
            activeClassName="active-nav"
          >
            <i className="image fas fa-user fa-2x"></i>
            <div className="overlay">
              <div className="text">ABOUT</div>
            </div>
          </NavLink>
          <NavLink
            to={process.env.PUBLIC_URL + "/course"}
            className="link"
            activeClassName="active-nav"
          >
            <i className="fas fa-cogs fa-2x"></i>
            <div className="overlay">
              <div className="text">COURSES</div>
            </div>
          </NavLink>
          
          <NavLink
            to={process.env.PUBLIC_URL + "/contact"}
            className="link"
            activeClassName="active-nav"
          >
            <i className="fas fa-envelope fa-2x"></i>
            <div className="overlay">
              <div className="text">CONTACT</div>
            </div>
          </NavLink>
          <NavLink
            to={process.env.PUBLIC_URL + "/credits"}
            className="link"
            activeClassName="active-nav"
          >
            <i className="fab fa-dev fa-2x"></i>
            <div className="overlay">
              <div className="text">CREDITS</div>
            </div>
          </NavLink>

        </nav>
        <ul>
          
          <li>
            <a
              href="https://www.mothercode.com/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-users-cog"></i>
            </a>
          </li>
        </ul>
      </div>

     
    </>
  );
}
