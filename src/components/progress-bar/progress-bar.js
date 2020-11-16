import React from "react";

import "./progress-bar.css";

const circumference = 2*Math.PI*80;
const progress = (procent) => {
  const offset = circumference - procent/100 * circumference;
  return offset;
};
const procent = 5.5;// const procent = Math.round(1/18*100);
const ProgressBar = () => {
  return (
    <div className="progress-bar-container">
      <div className="progress_bar">
        <span className="procent">
          <span className="procent-title">Прогресс</span>
          <span className="procent-num">1<i>/18</i></span>
        </span>
        <svg>
          <circle className="circle" cx="80" cy="80" r="80"></circle>
          <circle
            style={{
              strokeDasharray: `${circumference} ${circumference}`,
              strokeDashoffset: `${progress(procent)}`,
            }}
            className="circle2"
            cx="80"
            cy="80"
            r="80"
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export default ProgressBar;
