import iphoneImage from "../../img/pic_analysis.png";
import ButtonStyle from "../common/ButtonStyle";
import "./PageThree.css";
const PageThree = () => {
  return (
    <div className="PageThree" id="PageThree">
      <div className="root">
        <div className="three-container">
          <div className="three-left">
            <img className="three-image-left" src={iphoneImage} alt="" />
          </div>
          <div className="three-right">
            <div className="three-right-outer">
              <div className="three-right-inner">
                <div className="three-right-title">
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

                  <span className="three-text-green">ERN</span>
                </div>

                <div>
                  <span className="three-right-intro-text">Have your own</span>
                  <div>
                    <span className="three-right-intro-text">strategy?</span>
                  </div>
                </div>

                <div className="des-container">
                  <span className="three-right-des">
                    Trade smarter not harder, create your own strategy in our
                    platform and experience the power of automating your
                    positions.
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

export default PageThree;
