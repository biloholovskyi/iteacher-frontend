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
      margin-top: 60px;
    }
`
// calendar style
const CalendarWrap = styled.div`
  width: 100%;
  height: 100%;
  header {
      display: flex;
      align-items: center;
      padding: 0 24px;
      padding-bottom: 24px;
      background-color: #fff;
      img {
      width: 24px;
      height: 24px;
      object-fit: contain;
      object-position: center;
      margin-right: 12px;
      }
      div {
          background-color: #fff;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: -0.01em;
           color: #111111;
          min-width: 115px;
          margin-right: 30px;
      }
      button {
          background-color: #fff;
          border: none;
          cursor: pointer;
          margin-left: 8px;
          width: 24px;
          height: 24px;
          img {
          width: 24px;
          height: 24px;
          object-fit: contain;
          background-color: #fff;
          }
          & .prev {
            transform: rotate(180deg);
          }
      }
  }
  table {
    width: 100%;
    height: 100%;
    background: #fff;
    border-collapse: collapse;
    thead {
      tr {
        th {
        background-color: #fff;
        padding-bottom: 16px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #111111;
        }
      }
    }
    tbody {
    .week {background-color: red}
      tr {
        td {
          background-color: #fff;
          border: 1px solid #DDE1E6;
          padding-left: 10px;
          padding-top: 10px;
          cursor: pointer;
          div {
            width: 32px;
            height: 32px;
            text-align: center;
            color: #697077;
             font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 32px;
            background-color: #fff;
            margin-top: -30px;
          }
        }
        & .today {
          div {
          background-color:  #4F7FFF;
         color: #fff;
         border-radius: 50%;
          }
        }
      }
    }
  }
`
export {CalendarModalWrapp, CalendarBody,CalendarWrap}
