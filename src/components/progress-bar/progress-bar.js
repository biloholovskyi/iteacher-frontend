import React from "react";

import { ProgressBarContainer, Progress, Svg, Circle } from './progress-bar-style';

const circumference = 2*Math.PI*80;
const progress = (procent) => {
  const offset = circumference - procent/100 * circumference;
  return offset;
};
const count = 9;
const procent = Math.round(count/18*100);// const procent = Math.round(9/18*100);
const ProgressBar = () => {
  return (
    <ProgressBarContainer>
      <Progress>
        <span className="procent">
          <span className="procent-title">Прогресс</span>
          <span className="procent-num">{count}<i>/18</i></span>
        </span>
        <Svg>
          <Circle cx="80" cy="80" r="80"></Circle>
          <Circle
            style={{
              strokeDasharray: `${circumference} ${circumference}`,
              strokeDashoffset: `${progress(procent)}`,
            }}
            cx="80"
            cy="80"
            r="80"
            second
          ></Circle>
        </Svg>
      </Progress>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
