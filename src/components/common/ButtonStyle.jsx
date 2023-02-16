import React from "react";

const ButtonStyle = ({ img, text1, text2, isIcon = true }) => {
  return (
    // darkMode
    <button className="button a-button">
      <div className="paddingHz20 paddingVt6 center">
        <span className="fw500 text18">
          {text1}
          {"    "}
        </span>
        <div className="space-w10"></div>
        {isIcon ? (
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            className="button-image"
          >
            <path
              d="M7 6.5C0.500002 6.5 0.5 13 0.5 12L0.5 6.5L0.5 -2.84124e-07C0.5 -2.84124e-07 0.500002 6.5 7 6.5Z"
              fill="#121212"
            ></path>
          </svg>
        ) : (
          <div />
        )}
      </div>
    </button>
  );
};

export default ButtonStyle;
