import styled from "styled-components";

const SingleCoursesWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
   max-width: 888px;
   margin: 0 auto;
   padding-top: 58px;
   
   a {
     display: flex;
    align-items: center;
    justify-content: space-center;
    margin-bottom: 9px;
    text-decoration: none;
  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-right: 12px;
  }
  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #697077;
    letter-spacing: -0.01em;
  }
   }
   
   .title {
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.01em;
    color: #000000;
    margin-bottom: 8px;
   }
   .desc {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #697077;
    letter-spacing: -0.01em;
     margin-bottom: 24px;
   }
`
const Banner = styled.div`
    width: 100%;
    background: linear-gradient(60.64deg, #0093E9 0%, #80D0C7 100%);
    border-radius: 8px;
    height: 320px;
    position: relative;
    padding: 34px;
    display: flex;
    align-items: flex-end;
     margin-bottom: 24px;
    h2 {
      background-color: transparent;
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 44px;
      letter-spacing: -0.01em;
      color: #FFFFFF;
    }
`
const InfoBlock = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 28px;
  border-bottom: 1px solid  #DDE1E6;
  .infoItem {
      min-height: 88px;
    flex: 1;
    text-align: center;
    border-right: 1px solid  #DDE1E6;
    .top {
    display: flex;
    align-items: flex-end;
    justify-content: center;
     margin-bottom: 8px;
      h4 {
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 40px;
        letter-spacing: -0.01em;
        color: #111111;
        margin-right: 3px;
      }
      p {
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 30px;
        letter-spacing: -0.01em;
        color: #111111;
      }
      .dificulty {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        .dificulty-item {
          width: 8px;
          height: 8px;
          background: #DDE1E6;
          border-radius: 100px;
          margin: 0 4px;
          
         &.active {
          background: #FF832B;
         }
        }
      }
    }
    .bottom {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.01em;
      color: #697077;
       max-width: 138px;
    margin: 0 auto;
    }
  }
  & .infoItem:last-child {
    border-right: none;
  }
`

const DescSection = styled.div`
margin-bottom: 24px;
padding-bottom: 28px;
  border-bottom: 1px solid  #DDE1E6;
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.01em;
      color: #111111;
      margin-bottom: 16px;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;
      color: #111111;
      a {
        display: inline-block;
        color: #4F7FFF;
        cursor: pointer;
      }
  }
`

const ProgramSection = styled.div`
    width: 100%;
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.01em;
      color: #111111;
      margin-bottom: 16px;
  }
  button {
        width: 100%;
    background-color: #4F7FFF;
    border: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #fff;
    padding: 14px 0;
    box-shadow: 0px 0px 1px rgba(105, 112, 119, 0.12), 0px 1px 2px rgba(105, 112, 119, 0.2);
    border-radius: 6px;
    margin-bottom: 48px;
  }
`

export {ProgramSection, SingleCoursesWrap, Banner, InfoBlock, DescSection}