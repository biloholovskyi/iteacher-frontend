import styled from "styled-components";

const CalendarModalWrapp = styled.div`
  width: 100%;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  height: 100%;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(1,1,1,.2);
`
const CalendarBody = styled.div`
    max-width: 660px;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 0px 16px rgba(105, 112, 119, 0.12), 0px 8px 16px rgba(105, 112, 119, 0.16);
    border-radius: 8px;
    position: relative;
    height: 100%;
    max-height: 647px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    padding: 24px 0;
    .close {
      position: absolute;
      width: 24px;
      height: 24px;
      top: 24px;
      right: 24px;
      background-color: transparent;
      cursor: pointer;
    }
    h3 {
      padding: 0 24px;
      background-color: #fff;
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 36px;
      letter-spacing: -0.01em;
      color: #000000;
      margin-bottom: 24px;
    }
    .addLesson {
      width: 100%;
      max-width: 612px;
      margin: 0 auto;
      border: none;
      background: #4F7FFF;
      box-shadow: 0px 0px 1px rgba(105, 112, 119, 0.12), 0px 1px 2px rgba(105, 112, 119, 0.2);
      border-radius: 6px;
      padding: 14px 0;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #FFFFFF;
      cursor: pointer;
    }
`

export {CalendarModalWrapp, CalendarBody}
