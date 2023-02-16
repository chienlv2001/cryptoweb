import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
// import { useContext } from "react";
// import { themeContext } from "./Context";
const NavbarApp = ({ darkMode }) => {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        background: darkMode ? "black" : "white",
      }}
      className="n-wrapper"
      id="Navbar"
    >
      {/* left */}
      <div className="n-left">
        <div className="title-bar">
          <div className="logo">
            <svg
              width="29"
              height="51"
              viewBox="0 0 29 51"
              fill="none"
              className="keping-ai-logo"
            >
              <path
                d="M9.48007 13.2309V6.09619L1 1V20.3655L10.5401 25.4617L27.5002 15.2693V5.07695L4.18002 18.3271"
                stroke="#121212"
                stroke-width="1.04213"
              ></path>
              <path
                d="M9.48007 35.9452V44.0991L1 49.9233V27.7913L4.18002 25.4616M4.18002 30.121L27.5002 45.264V33.6155L14.7801 26.6265"
                stroke="#121212"
                stroke-width="1.04213"
              ></path>
            </svg>
          </div>
        </div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link
                activeclassName="active"
                to="PageIntro"
                spy={true}
                smooth={true}
              >
                <div className="text-row">
                  <span className="medium">PageI</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="PageOne" spy={true} smooth={true}>
                <div className="text-row">
                  <span className="medium">PageIIr</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="PageTwo" spy={true} smooth={true}>
                <div className="text-row">
                  <span className="medium">PageIII</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="PageThree" spy={true} smooth={true}>
                <div className="text-row">
                  <span className="medium">PageIV</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="PageFour" spy={true} smooth={true}>
                <div className="text-row">
                  <span className="medium">PageV</span>
                </div>
              </Link>
            </li>

            <li>
              <Link to="PageFooter" spy={true} smooth={true}>
                <div className="text-row">
                  <span className="medium">Footer</span>
                </div>
              </Link>
            </li>
            {/* <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li> */}
          </ul>
        </div>
        {/* <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link> */}

        <div>
          <div className="row center form-container">
            <p className="text14 cursor-pointer fw-bold kzoll">SignIn</p>
            <div className="space-w12"></div>
            <div className="button register-button">
              <p className="text14 cursor-pointer fw-bold kzoll">Register</p>
            </div>
            <div className="space-w16"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarApp;
