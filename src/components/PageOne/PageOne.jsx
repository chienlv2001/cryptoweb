import "./PageOne.css";
import iphoneImage from "../../img/iphone.png";
import ButtonStyle from "../common/ButtonStyle";
const PageOne = () => {
  return (
    <div className="PageOne" id="PageOne">
      <div className="root">
        <div className="one-container">
          <div className="one-left">
            <img className="one-image-left" src={iphoneImage} alt="" />
          </div>
          <div className="one-right">
            <div className="one-right-outer">
              <div className="one-right-inner">
                <div className="one-right-title">
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

                  <span className="one-text-green">COPY</span>
                </div>

                <div>
                  <div>
                    <span className="one-right-intro-text">
                      Revolutionize the
                    </span>
                    <div>
                      <span className="one-right-intro-text">
                        way you invest in
                      </span>
                    </div>

                    <div>
                      <span className="one-right-intro-text">crypto</span>
                    </div>
                  </div>

                  <div className="des-container">
                    <span className="one-right-des">
                      Copy the moves of top strategist on our marketplace, and
                      reap the benefits within minutes.
                    </span>
                  </div>
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

export default PageOne;
