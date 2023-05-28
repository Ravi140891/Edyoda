import React from "react";
import "./ButtonContainer.css";

const ButtonContainer = () => {
  return (
    <div className="button-container">
      <div className="secondary-btn">
        <p className="cancel">Cancel</p>
      </div>
      <div className="primary-btn">
        <p className="proceed">Proceed to pay</p>
      </div>
    </div>
  );
};

export default ButtonContainer;
