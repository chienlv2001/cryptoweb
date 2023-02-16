import "./banner.css";
const Banner = () => {
  return (
    <div>
      <div className="banner-container">
        <div>
          <img
            className="banner-image"
            src="https://static.hawkingverse.xyz/1302.png"
          />
        </div>

        <div>
          <div>
            <p className="title-banner">Calculate your investment growth</p>
          </div>

          <div className="space-h10" />
          <div>
            <p className="des-banner">
              Copy from the best strategies in our marketplace
            </p>
          </div>
        </div>

        <div className="button center">
          <span className="calculate">Calculate</span>
          <div className="space-w10"></div>
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            class="button-image"
          >
            <path
              d="M1.64124 7C1.08895 7 0.641235 7.44772 0.641235 8C0.641235 8.55228 1.08895 9 1.64124 9V7ZM21.0242 8.70711C21.4148 8.31658 21.4148 7.68342 21.0242 7.29289L14.6603 0.928932C14.2698 0.538408 13.6366 0.538408 13.2461 0.928932C12.8555 1.31946 12.8555 1.95262 13.2461 2.34315L18.9029 8L13.2461 13.6569C12.8555 14.0474 12.8555 14.6805 13.2461 15.0711C13.6366 15.4616 14.2698 15.4616 14.6603 15.0711L21.0242 8.70711ZM1.64124 9H20.3171V7H1.64124V9Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Banner;
