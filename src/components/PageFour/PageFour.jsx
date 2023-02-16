import "./PageFour.css";
import iphoneImage from "../../img/iphone.png";
import ButtonStyle from "../common/ButtonStyle";
const PageFour = () => {
  return (
    <div className="PageFour" id="PageFour">
      <div className="root">
        <div className="four-container">
          <div className="four-left">
            <img className="four-image-left" src={iphoneImage} alt="" />
          </div>
          <div className="four-right">
            <div className="four-right-outer">
              <div className="four-right-inner">
                <div className="four-right-title">
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

                  <span className="four-text-green">AUTOMATE</span>
                </div>

                <div>
                  <span className="four-right-intro-text">
                    Run powerful bots
                  </span>
                  <div>
                    <span className="four-right-intro-text">
                      on top of your
                    </span>
                  </div>

                  <div>
                    <span className="four-right-intro-text"> strategy</span>
                  </div>
                </div>

                <div className="des-container">
                  <span className="four-right-des">
                    Copy the moves of top strategist on our marketplace, and
                    reap the benefits within minutes.
                  </span>
                </div>

                <ButtonStyle text1={"Register Now"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFour;
