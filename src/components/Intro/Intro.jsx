import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
import ButtonStyle from "../common/ButtonStyle";
const Intro = () => {
  // Transition

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      <div className="intro-inner" id="intro-inner">
        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy} alt="" />
          <div
            className="blur"
            style={{ background: "rgb(238 210 255)" }}
          ></div>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>

        <div className="i-left">
          <span className="text32 fw500">KepingAi</span>
          <div className="i-name">
            <span className="rem3 fw-bold">Crypto Trades</span>
            <span className="rem3 fw-bold">Automated</span>
            <div className="space-h20"></div>
            <span className="text22">
              Once and for all, removing greed from the equation.
            </span>
          </div>

          <Link to="contact" smooth={true} spy={true}>
            <div className="space-h20"></div>
            <div className="space-h20"></div>
            <ButtonStyle />
            <div className="space-h10" />
            <div>
              <span className="text14">*No credit card required</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="i-footer space-around">
        <div className="column center">
          <div className="center">
            <div className="text-row">
              <span className="h0">$15.6</span>
            </div>
            <div className="text-row">
              <span className="h0 kzoll">M</span>
            </div>
          </div>

          <div>
            <span className="medium">TRADED VOLUME</span>
          </div>
        </div>

        <div className="column center">
          <div className="center">
            <div className="text-row">
              <span className="h0">$15.6</span>
            </div>
            <div className="text-row">
              <span className="h0 kzoll">M</span>
            </div>
          </div>

          <div>
            <span className="medium">TRADED VOLUME</span>
          </div>
        </div>

        <div className="column center">
          <div className="center">
            <div className="text-row">
              <span className="h0">$15.6</span>
            </div>
            <div className="text-row">
              <span className="h0 kzoll">M</span>
            </div>
          </div>

          <div>
            <span className="medium">TRADED VOLUME</span>
          </div>
        </div>

        <div className="column center">
          <div className="center">
            <div className="text-row">
              <span className="h0">$15.6</span>
            </div>
            <div className="text-row">
              <span className="h0 kzoll">M</span>
            </div>
          </div>

          <div>
            <span className="medium">TRADED VOLUME</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
