import React from "react";
import { connect  } from 'react-redux';

import { ProgressBarContainer, Progress, Svg, Circle } from './progress-bar-style';

const circumference = 2*Math.PI*80;
const progress = (procent) => {
  const offset = circumference - procent/100 * circumference;
  return offset;
};


const ProgressBar = ({lessons}) => {

  const total = lessons.length
  const count = 9;
  const procent = Math.round(count/total*100);// const procent = Math.round(9/18*100);

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
const mapStateToProps = ({ lessons }) => {
  return {
    lessons
  }
}
export default connect(mapStateToProps)(ProgressBar);
