// Footer.js
import React from "react";
import "./Footer.css";
import ButtonStyle from "../common/ButtonStyle";

const Footer = () => {
  return (
    <div className="PageFooter" id="PageFooter">
      <footer className="footer">
        <div className="container">
          <div className="space-between footer-top">
            <div>
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

              <span className="footer-title">CryptoHawkAi</span>
            </div>

            <div>
              <div className="footer-title">
                Get updated with latest crypto news
              </div>
              <div className="center">
                <div className="f-right">
                  <form>
                    <input
                      type="text"
                      name="user_name"
                      className="user"
                      placeholder="Name"
                    />
                    <div
                      className="blur c-blur1"
                      style={{ background: "var(--purple)" }}
                    ></div>
                  </form>
                </div>

                <div className="button-container">
                  <ButtonStyle isIcon={false} text1={"Subscribe"} />
                </div>
              </div>
            </div>
          </div>

          <div className="space-between">
            <div className="col-md-4">
              <h5 className="green-text">Discover</h5>
              <p className="text_normal">Explore strategies</p>
              <p className="text_normal">Explore signal</p>
            </div>
            <div className="col-md-4">
              <h5 className="green-text">Learn</h5>
              <p className="text_normal"> All articles</p>
              <p className="text_normal">Getting started</p>
              <p className="text_normal">Video Tutorial</p>
              <p className="text_normal">Api security</p>
              <p className="text_normal">Intro to calculator</p>

              <p className="text_normal">Simplebot vs Dcabot</p>
              <p className="text_normal">Pricing</p>
              {/* <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form> */}
            </div>
            <div className="col-md-4">
              <h5 className="green-text">Investors</h5>
              <p className="text_normal">Copy</p>
              <p className="text_normal">Automate</p>
              <p className="text_normal">Automate</p>
            </div>

            <div className="col-md-4">
              <h5 className="green-text">Investors</h5>
              <p className="text_normal">Copy</p>
              <p className="text_normal">Automate</p>
              <p className="text_normal">Automate</p>
            </div>

            <div className="col-md-4">
              <h5 className="green-text">Investors</h5>
              <p className="text_normal">Copy</p>
              <p className="text_normal">Automate</p>
              <p className="text_normal">Automate</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="copyright-container">
            <p className="copyright">Copyright &copy; 2023 Example Company</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
