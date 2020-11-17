import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  position: relative;
  text-align: center;
  padding-top: 24px;
`
const Progress = styled.div`
  position: relative;
  width: 200px;
  display: inline-block;
  .procent {
    position: absolute;
    top: 60px;
    left: 80px;
    color: var(--mainBlack);
    display: flex;
    flex-direction: column;
    &-title {
      font-weight: 500;
      font-size: 12px;
      color: var(--mainGrey60);
    }
    &-num {
      font-size: 34px;
      font-weight: 700;
      color: var(--mainBlack);
      i {
        font-style: normal;
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
`
const Svg = styled.svg`
  position: relative;
  height: 160px;
  width: 160px;
  top: 7px;
  left: 7px;
  overflow: initial!important;
`
const Circle = styled.circle`
  position: absolute;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: ${props=>props.second ? "var(--mainBlue)" : "var(--mainGrey20)"};
  stroke-width: 7;
  stroke-linecap: round;
  ${props=>props.second ? "transform-origin: center;" : null}
  ${props=>props.second ? "transform: rotate(-90deg);" : null}
`
export {
  ProgressBarContainer,
  Progress,
  Svg,
  Circle
}