import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <div className="main-lookup">
      <div className="header">
        <p>Access curated courses with</p>
        <p>
          <i className="fa fa-rupee"></i> <span className="red">18,500</span> at
          just{" "}
          <span className="blue">
            <i className="fa fa-rupee"></i> 99
          </span>{" "}
          per year!
        </p>
      </div>
      <div className="pointer">
        <div className="icon">
          <img src="./Icon.png" alt="book" />
        </div>
        <div className="text-container">
          <p>
            <span className="blue">100+</span>Job relevant courses
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
