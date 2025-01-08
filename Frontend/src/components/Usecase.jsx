import React from "react";
import "./usecase.css";

const UseCase = () => {
  return (
    <div className="head-container">
      <div className="more-container">
        <h1>More Container Heading</h1>
        <p>More container text description goes here.</p>
      </div>
      <p className="supporting-text">Supporting text description goes here.</p>
      <div className="big-container">
        <div className="left-container">
          <h2>Left Container Heading</h2>
          <p>Some content for the left container.</p>
        </div>
        <div className="right-container">
          <img
            src="<path-to-image>"
            alt="Description"
            className="right-image"
          />
        </div>
      </div>
    </div>
  );
};

export default UseCase;
