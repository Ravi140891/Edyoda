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
          <img src="./assets/Icon.png" alt="book" />
        </div>
        <div className="text-container">
          <p>
            <span className="blue">100+</span>Job relevant courses
          </p>
        </div>
      </div>
      <div className="pointer">
        <div className="icon">
          <img src="./assets/Vector.png" alt="clock" />
        </div>
        <div className="text-container">
          <p>
            <span className="blue">20,000+</span>Hours of content
          </p>
        </div>
      </div>
      <div className="pointer">
        <div className="icon">
          <img src="./assets/live.png" alt="live" />
        </div>
        <div className="text-container">
          <p>
            <span className="blue">Exclusive</span>webinar access
          </p>
        </div>
      </div>
      <div className="pointer">
        <div className="icon">
          <img src="./assets/sponshorship.png" alt="sponshorship" />
        </div>
        <div className="text-container">
          <p>
            Sponshorship worth{" "}
            <span className="blue sponshor">
              <i className="fa fa-rupee"></i>94,500
            </span>
          </p>
        </div>
      </div>
      <div className="pointer">
        <div className="icon">
          <img src="./assets/ads.png" alt="ads free" />
        </div>
        <div className="text-container">
          <p>
            <span className="blue">Ad Free</span>learning experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
