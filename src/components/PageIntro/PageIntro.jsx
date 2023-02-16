import "./PageIntro.css";
import iphoneImage from "../../img/two_iphone.png";
import ButtonStyle from "../common/ButtonStyle";
const PageIntro = () => {
  return (
    <div className="PageIntro" id="PageIntro">
      <div className="root">
        <div className="intro-container">
          <div className="intro-left">
            <img className="intro-image-left" src={iphoneImage} alt="" />
          </div>
          <div className="intro-right">
            <div className="intro-right-outer">
              <div className="intro-right-inner">
                <div>
                  <span>Traded $31M+ with 305+ investors have joined</span>
                  <div>
                    <span className="intro-right-intro-text">
                      Copy strategy has
                    </span>
                    <div>
                      <span className="intro-right-intro-text">
                        never been this easy
                      </span>
                    </div>
                  </div>
                  <div className="des-container">
                    <div className="space-h4" />

                    <span className="intro-right-des">
                      Invest like a top trader & replicate the moves of the best
                      strategies on the market
                    </span>
                  </div>
                </div>
                <div className="des-container">
                  <span className="intro-medium-text">
                    Once and for all, removing from the equation
                  </span>
                </div>

                <div className="intro-right-container">
                  <div className="intro-right">
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

                <ButtonStyle text1={"Register Now"} />

                <div className="intro-small-text">
                  New users get 7 day free pro tier & subscribe to free
                  strategies
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageIntro;
