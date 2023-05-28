import React from "react";
import "./SummaryContainer.css";
import Alert from "./Alert";

const SummaryContainer = () => {
  return (
    <div className="summary">
      <div className="subscription-fee">
        <p className="left-fee">Subscription Fee</p>
        <p className="right-fee">
          <i className="fa fa-rupee"></i>18,500
        </p>
      </div>
      <Alert />
    </div>
  );
};

export default SummaryContainer;
