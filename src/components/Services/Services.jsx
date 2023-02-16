import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";
import ButtonStyle from "../common/ButtonStyle";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      <div className="full-width">
        <div className="space-h20" />
        <div className="space-h20" />
        <div className="space-h20" />
        <div className="space-h20" />

        <div className="column center">
          <div className="column center">
            <div className="column center gap1">
              <div>
                <span className="rem3plus fw-bold">
                  How to start <span className="kzoll rem3plus fw-bold">?</span>
                </span>
              </div>
              <div>
                <span className="text22">
                  3 easy steps to start your automations.
                </span>
              </div>
            </div>
            <div className="space-h20" />
            <div className="space-h12" />

            <div className="column center">
              <div className="line">
                <div className="space-h10" />

                <div className="paddingHz30">
                  <span className="text16">
                    All of your data is secured with high-end encryption.
                  </span>
                </div>
              </div>

              <div className="space-h20" />
              <div className="space-h12" />
              <ButtonStyle />
            </div>
          </div>
        </div>

        <div className="space-h20" />
        <div className="space-h20" />
        <div className="space-h10" />

        <div className="row center">
          <CardItem />
          <CardItem />

          <CardItem />
        </div>
      </div>
    </div>
  );
};

export default Services;

const CarSVG = () => {
  return (
    <svg width="149" height="101" viewBox="0 0 149 101" fill="none">
      <path
        d="M38.8326 11.8717C41.0943 8.07618 46.375 5.97153 50.6274 7.17083L142.5 30C146.752 31.1993 149.852 38.749 147.59 42.5445L115.853 95.8055C113.591 99.601 108.31 101.706 104.058 100.506L10.6998 74.1767C6.44738 72.9774 1.73831 64.7955 4 61L38.8326 11.8717Z"
        fill="url(#paint0_linear_9249_18126)"
      ></path>
      <rect
        x="0.225281"
        y="0.565245"
        width="112"
        height="77"
        rx="7.5"
        transform="matrix(0.962455 0.27144 -0.511893 0.859049 40.2255 0.0185213)"
        fill="#191919"
        stroke="url(#paint1_linear_9249_18126)"
      ></rect>
      <g filter="url(#filter0_f_9249_18126)">
        <path
          d="M44.5612 14.8595C45.813 15.3181 46.5103 15.6183 46.7817 16.0656C47.1014 16.5899 46.8178 17.3172 46.1357 18.7411C47.1398 17.3443 47.684 16.6917 48.5021 16.4822C49.1381 16.3175 49.9446 16.4251 51.263 16.6601C50.0161 16.2028 49.314 15.9013 49.0448 15.4596C48.7228 14.9298 49.004 14.2067 49.6886 12.7785C48.7925 14.0219 48.2652 14.6741 47.585 14.9501C46.9047 15.2262 46.0642 15.1291 44.5612 14.8595Z"
          fill="#F5F5F5"
        ></path>
      </g>
      <g filter="url(#filter1_f_9249_18126)">
        <path
          d="M86.6328 82.7843C87.8845 83.2429 88.5818 83.5431 88.8532 83.9904C89.173 84.5147 88.8893 85.242 88.2072 86.6659C89.2114 85.2691 89.7555 84.6165 90.5736 84.407C91.2096 84.2423 92.0161 84.3499 93.3346 84.5849C92.0876 84.1276 91.3855 83.8261 91.1164 83.3844C90.7944 82.8546 91.0755 82.1315 91.7601 80.7034C90.864 81.9467 90.3367 82.5989 89.6565 82.8749C88.9763 83.151 88.1357 83.0539 86.6328 82.7843Z"
          fill="#F5F5F5"
        ></path>
      </g>
      <path
        d="M40.7778 10.9796C42.0295 11.4382 42.7268 11.7384 42.9982 12.1857C43.318 12.71 43.0343 13.4373 42.3522 14.8612C43.3564 13.4645 43.9005 12.8119 44.7186 12.6023C45.3547 12.4376 46.1611 12.5453 47.4796 12.7803C46.2326 12.3229 45.5305 12.0214 45.2614 11.5797C44.9394 11.0499 45.2205 10.3268 45.9052 8.89867C45.009 10.142 44.4817 10.7942 43.8015 11.0702C43.1213 11.3463 42.2808 11.2492 40.7778 10.9796Z"
        fill="#F5F5F5"
      ></path>
      <g filter="url(#filter2_f_9249_18126)">
        <path
          d="M98.6328 86.7843C99.8845 87.2429 100.582 87.5431 100.853 87.9904C101.173 88.5147 100.889 89.242 100.207 90.6659C101.211 89.2691 101.756 88.6165 102.574 88.407C103.21 88.2423 104.016 88.3499 105.335 88.5849C104.088 88.1276 103.386 87.8261 103.116 87.3844C102.794 86.8546 103.076 86.1315 103.76 84.7034C102.864 85.9467 102.337 86.5989 101.656 86.8749C100.976 87.151 100.136 87.0539 98.6328 86.7843Z"
          fill="#F5F5F5"
        ></path>
      </g>
      <path
        d="M95.7778 81.9796C97.0295 82.4382 97.7268 82.7384 97.9982 83.1857C98.318 83.71 98.0343 84.4373 97.3522 85.8612C98.3564 84.4645 98.9005 83.8119 99.7186 83.6023C100.355 83.4376 101.161 83.5453 102.48 83.7803C101.233 83.3229 100.531 83.0214 100.261 82.5797C99.9394 82.0499 100.221 81.3268 100.905 79.8987C100.009 81.142 99.4817 81.7942 98.8015 82.0702C98.1213 82.3463 97.2808 82.2492 95.7778 81.9796Z"
        fill="#F5F5F5"
      ></path>
      <path
        d="M83.7778 77.9796C85.0295 78.4382 85.7268 78.7384 85.9982 79.1857C86.318 79.71 86.0343 80.4373 85.3522 81.8612C86.3564 80.4645 86.9005 79.8119 87.7186 79.6023C88.3547 79.4376 89.1611 79.5453 90.4796 79.7803C89.2326 79.3229 88.5305 79.0214 88.2614 78.5797C87.9394 78.0499 88.2205 77.3268 88.9052 75.8987C88.009 77.142 87.4817 77.7942 86.8015 78.0702C86.1213 78.3463 85.2808 78.2492 83.7778 77.9796Z"
        fill="#F5F5F5"
      ></path>
      <g filter="url(#filter3_f_9249_18126)">
        <path
          d="M71.519 58.6471C71.8922 59.0952 72.2249 59.3604 72.5171 59.4428C72.8459 59.5356 73.4655 59.4627 74.3757 59.2243C75.3053 58.9532 75.8382 58.7035 75.9742 58.4753C76.1296 58.2144 76.0767 57.8377 75.8155 57.345C75.5543 56.8524 74.7156 55.9683 73.2993 54.6928C71.9389 53.395 70.7356 52.0844 69.6892 50.7609C68.6429 49.4374 68.1349 48.2847 68.1651 47.3029C68.1954 46.3212 68.4923 45.3575 69.0558 44.4118C69.6193 43.4661 70.2877 42.7024 71.0611 42.1207C71.8345 41.5389 73.4416 40.8114 75.8823 39.9381C78.3595 39.0751 80.4586 38.5245 82.1796 38.2861L84.4822 34.422L89.4143 35.813L87.0242 39.8239C89.4985 42.0452 90.8045 44.5085 90.9423 47.2135L82.4763 49.2823L82.3585 48.6206C81.8391 46.3412 81.1958 45.0932 80.4286 44.8769C80.0268 44.7635 79.361 44.8424 78.4313 45.1134C77.5211 45.3519 76.9786 45.6179 76.8037 45.9113C76.6482 46.1722 76.6926 46.5275 76.9367 46.9772C77.2173 47.4373 78.0098 48.3273 79.3142 49.6474C80.6551 50.9778 81.8573 52.3263 82.9207 53.6927C84.0401 55.0368 84.6139 56.1508 84.6419 57.0348C84.6893 57.8861 84.2759 59.0455 83.4015 60.5129C82.5465 61.9477 81.6604 62.8976 80.7432 63.3626C79.8626 63.8379 78.4743 64.3415 76.5785 64.8733C74.7192 65.4154 72.9936 65.8048 71.4016 66.0414L69.0116 70.0523L64.0795 68.6613L66.4987 64.6015C65.3265 63.7757 64.2646 62.6573 63.3131 61.2463C62.4176 59.813 61.9445 58.4226 61.8939 57.0752L70.3599 55.0065L70.4777 55.6682C70.8353 57.2164 71.1824 58.2094 71.519 58.6471Z"
          fill="url(#paint2_linear_9249_18126)"
        ></path>
      </g>
      <path
        d="M64.1826 48.6393C64.5557 49.0874 64.8884 49.3526 65.1807 49.435C65.5095 49.5278 66.129 49.4549 67.0392 49.2165C67.9689 48.9454 68.5017 48.6957 68.6377 48.4675C68.7932 48.2066 68.7403 47.8298 68.4791 47.3372C68.2179 46.8446 67.3792 45.9605 65.9628 44.685C64.6025 43.3872 63.3991 42.0765 62.3528 40.7531C61.3065 39.4296 60.7984 38.2769 60.8287 37.2951C60.859 36.3134 61.1559 35.3496 61.7194 34.404C62.2829 33.4583 62.9513 32.6946 63.7247 32.1129C64.4981 31.5311 66.1051 30.8036 68.5459 29.9303C71.0231 29.0673 73.1222 28.5166 74.8431 28.2783L77.1457 24.4142L82.0778 25.8052L79.6878 29.816C82.1621 32.0374 83.4681 34.5007 83.6058 37.2057L75.1399 39.2745L75.0221 38.6128C74.5027 36.3333 73.8594 35.0854 73.0922 34.869C72.6903 34.7557 72.0246 34.8346 71.0949 35.1056C70.1847 35.3441 69.6422 35.61 69.4673 35.9035C69.3118 36.1644 69.3561 36.5197 69.6002 36.9694C69.8809 37.4295 70.6734 38.3195 71.9778 39.6396C73.3187 40.97 74.5209 42.3184 75.5843 43.6849C76.7037 45.029 77.2774 46.143 77.3055 47.0269C77.3529 47.8783 76.9394 49.0377 76.065 50.5051C75.2101 51.9398 74.324 52.8897 73.4068 53.3548C72.5261 53.8301 71.1379 54.3336 69.242 54.8655C67.3827 55.4076 65.6571 55.7969 64.0652 56.0336L61.6752 60.0445L56.7431 58.6535L59.1623 54.5937C57.99 53.7679 56.9282 52.6495 55.9767 51.2385C55.0811 49.8052 54.6081 48.4148 54.5575 47.0674L63.0234 44.9987L63.1412 45.6604C63.4989 47.2086 63.846 48.2016 64.1826 48.6393Z"
        fill="url(#paint3_linear_9249_18126)"
      ></path>
      <defs>
        <filter
          id="filter0_f_9249_18126"
          x="40.5613"
          y="8.77832"
          width="14.7017"
          height="13.9629"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="2"
            result="effect1_foregroundBlur_9249_18126"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter1_f_9249_18126"
          x="82.6328"
          y="76.7031"
          width="14.7017"
          height="13.9629"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="2"
            result="effect1_foregroundBlur_9249_18126"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter2_f_9249_18126"
          x="94.6328"
          y="80.7031"
          width="14.7017"
          height="13.9629"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="2"
            result="effect1_foregroundBlur_9249_18126"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter3_f_9249_18126"
          x="40.969"
          y="17.1348"
          width="70.8982"
          height="70.0195"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="7.5"
            result="effect1_foregroundBlur_9249_18126"
          ></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_9249_18126"
          x1="24"
          y1="28"
          x2="134.5"
          y2="76.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C9D936"></stop>
          <stop offset="0.505208" stop-color="#E75454"></stop>
          <stop offset="1" stop-color="#5000F1"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_9249_18126"
          x1="0"
          y1="39"
          x2="120.766"
          y2="39"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C9D936"></stop>
          <stop offset="0.505208" stop-color="#E75454"></stop>
          <stop offset="1" stop-color="#5000F1"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_9249_18126"
          x1="88.4807"
          y1="57.9179"
          x2="67.9998"
          y2="45.7136"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#CCFF00"></stop>
          <stop offset="1" stop-color="#00ED09"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_9249_18126"
          x1="81.1443"
          y1="47.9101"
          x2="60.6633"
          y2="35.7058"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#CCFF00"></stop>
          <stop offset="1" stop-color="#00ED09"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

const CardItem = () => {
  return (
    <div className="center">
      <div className="card-container">
        <div className="center-colum">
          <div>
            <CarSVG />
          </div>
          <div className="space-h20" />
          <div className="text22 fw500">Connect a wallet</div>
          <div>
            <div className="space-h10" />

            <p className="text14 text-center">
              Connect your exchange wallet using a secure API connection
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
