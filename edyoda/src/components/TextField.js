import React from "react";

const TextField = ({
  months,
  total,
  perMonth,
  disabled,
  active,
  tag,
  onClick,
}) => {
  return (
    <div
      className={disabled ? "expired" : active ? "active" : "text-field"}
      onClick={onClick}
    >
      <div className="radioBtn">
        {disabled ? (
          <img src="./assets/Radio.png" alt="Radio Button" />
        ) : active ? (
          <img src="./assets/active.png" alt="Radio Button" />
        ) : (
          <img src="./assets/default.png" alt="Radio Button" />
        )}
      </div>
      <div className="text">
        <p>{months} months subscription</p>
        <div className="right-text">
          <div className="top">
            <p className="text1">Total</p>
            <p className="text2">
              <i className="fa fa-rupee"></i>
              {total}
            </p>
          </div>
          <div className="bottom">
            <p className="text1">
              <i className="fa fa-rupee"></i>
              {perMonth}
            </p>
            <p className="text2">/mo</p>
          </div>
        </div>
      </div>
      {tag && (
        <div
          className={`tag ${
            disabled ? "bgRed" : active ? "bgGreen" : "bgGrey"
          }`}
        >
          <p>{tag}</p>
        </div>
      )}
    </div>
  );
};

export default TextField;
