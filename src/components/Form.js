import React from "react";
import "./Form.css";
import InputContainer from "./InputContainer";
import SummaryContainer from "./SummaryContainer";
import ButtonContainer from "./ButtonContainer";

const Form = () => {
  return (
    <div className="form">
      <div className="progress-bar">
        <div className="stage1">
          <div className="icon">
            <img src="./assets/stage1.png" alt="stage 1" />
          </div>
          <div className="stage-text">
            <p>Sign up</p>
          </div>
        </div>
        <div className="stage1">
          <div className="icon">
            <img src="./assets/stage2.png" alt="stage 2" />
          </div>
          <div className="stage-text">
            <p>Subscribe</p>
          </div>
        </div>
      </div>
      <div className="form-header">
        <p>Select your subscription plan</p>
      </div>
      <InputContainer />
      <SummaryContainer />
      <ButtonContainer />
      <div className="razorpay">
        <img src="./assets/Razorpay.png" alt="Razorpay" />
      </div>
    </div>
  );
};

export default Form;
