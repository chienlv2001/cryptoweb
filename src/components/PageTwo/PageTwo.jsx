import "./PageTwo.css";
import iphoneImage from "../../img/iphone.png";
import ButtonStyle from "../common/ButtonStyle";
const PageTwo = () => {
  return (
    <div className="PageTwo" id="PageTwo">
      <div className="root">
        <div className="two-container">
          <div className="two-left">
            <img className="two-image-left" src={iphoneImage} alt="" />
          </div>
          <div className="two-right">
            <div className="two-right-outer">
              <div className="two-right-inner">
                <div className="two-right-title">
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

                  <span className="two-text-green">WALLET</span>
                </div>

                <div>
                  <span className="two-right-intro-text">Trade with ease</span>
                  <div>
                    <span className="two-right-intro-text">and full</span>
                  </div>
                  <div>
                    <span className="two-right-intro-text">confidence</span>
                  </div>
                </div>

                <div className="des-container">
                  <span className="two-right-des">
                    Securely connect and manage your crypto across multiple
                    exchanges
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

export default PageTwo;
