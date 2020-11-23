import styled from "styled-components";

const StudentsModalWrap = styled.div`
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
const StudentModal = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(105, 112, 119, 0.12), 0px 8px 16px rgba(105, 112, 119, 0.16);
  border-radius: 8px;
  width: 100%;
  max-width: 660px;
  min-height: 300px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  position: relative;
  .nameBlock {
    padding: 0 0px 24px;
    margin-bottom: 24px;
    border-bottom: 1px solid #DDE1E6;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #fff;
    .photo {
      width: 80px;
      height: 80px;
      object-position: center;
      object-fit: cover;
      margin-right: 18px;
      background-color: #fff;
    }
      .names {
        background-color: #fff;
        .name {
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 26px;
        letter-spacing: -0.01em;
        color: #000000;
         background-color: #fff;
         margin-bottom: 4px;
        }
        .email {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: -0.01em;
          color: #697077;
           background-color: #fff;
        }
      }
  }
    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 26px;
      letter-spacing: -0.01em;
      color: #111111;
       background-color: #fff;
       margin-bottom: 16px;
    }
    .lessonsInfo {
      padding: 19px 24px;
      width: 100%;
      background-color: #fff;
      border: 1px solid #DDE1E6;
      border-radius: 8px;
      h4 {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #111111;
      background-color: #fff;
      }
      p {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.01em;
      color: #697077;
      background-color: #fff;
      }
    }
    .close {
      width: 24px;
      height: 24px;
      object-fit: contain;
      cursor: pointer;
      position: absolute;
      right: 24px;
      top: 24px;
      background-color: #fff;
    }
    .more {
      width: 24px;
      height: 24px;
      object-fit: contain;
      cursor: pointer;
      position: absolute;
      right: 64px;
      top: 24px;
      background-color: #fff;
    }
`
export {StudentsModalWrap,StudentModal}