import React, { useContext } from "react";
import "./Alert.css";
import { PlanContext } from "../context/PlanContext";

const Alert = () => {
  const { month, perMonth } = useContext(PlanContext);

  const result = month * perMonth;
  const displayPrice = result < 100 ? result : result - 1;

  return (
    <div className="alert">
      <div className="alert-header">
        <p className="limited-left">Limited time offer</p>
        <p className="limited-right">
          -<i className="fa fa-rupee"></i>18,400
        </p>
      </div>
      <div className="alert-body">
        <div className="clock-icon">
          <img src="./assets/alertClock.png" alt="Alert Clock" />
        </div>
        <p className="alert-text">Offer valid till 25th March 2023</p>
      </div>
      <div className="total">
        <p className="total-left">Total (Incl. of 18% GST)</p>
        <p className="total-right">
          <i className="fa fa-rupee"></i>
          {displayPrice}
        </p>
      </div>
    </div>
  );
};

export default Alert;
