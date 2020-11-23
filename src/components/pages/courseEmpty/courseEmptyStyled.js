import styled from "styled-components";

const CourseEmptyWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding-top: 104px;
`
const LeftAside = styled.div`
  flex: 1;
  background-color: #fff;
  height: 285px;
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  padding-top: 16px;
  margin-right: 24px;
  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #111111;
    background-color: transparent;
     padding: 0 16px 16px;
     border-bottom: 1px solid #DDE1E6;
  }
`
const RightAsideWrap = styled.div`
  flex: 1;
  background-color: #E8EEFB;
  height: 285px;
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  padding: 16px;
  margin-left: 24px;
  display: flex;
  align-items: center;
   flex-direction: column;
   justify-content: center;
  button {
    background: #4F7FFF;
    box-shadow: 0px 0px 1px rgba(105, 112, 119, 0.12), 0px 1px 2px rgba(105, 112, 119, 0.2);
    border-radius: 6px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 14px 0;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
  }
  .icons {
    background: rgba(79, 127, 255, 0.2);
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    p {
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 20px;
      background-color: transparent;
    }
  }
  .stepBlock {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 6px;
    background-color: transparent;
    & * {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #4F7FFF;
      background-color: transparent;
    }
    .split {
      margin: 0 5px;
    }
  }
  .title {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 26px;
      letter-spacing: -0.01em;
      color: #111111;
      background-color: transparent;
      margin-bottom: 24px;
    }
`

const MainContent = styled.div`
  flex: 2;
  background-color: #fff;
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  padding-top: 16px;
  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #111111;
    background-color: transparent;
     padding: 0 16px 16px;
     border-bottom: 1px solid #DDE1E6;
  }
`
const PlanListItemWrap =styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
   background-color: #fff;
   padding: 20px 0;
    border-bottom: 1px solid #DDE1E6;
   .top {
     display: flex;
     
      .name,
       .number{
      background-color: #fff;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #111111;
     }
     .number {margin-right: 5px;}
   }
   .bottom {
    background-color: #fff;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #697077;
   }
`
const Plans = styled.div` 
  padding: 0 16px;
  background-color: #fff;
  border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`
const InfoList = styled.div`
   padding: 0 16px;
    background-color: #fff;
  
  .infoItem {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 56px;
    border-bottom: 1px solid #DDE1E6;
    .name {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #697077;
       background-color: #fff;
      }
      .desc {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #111111;
        letter-spacing: -0.01em;
         background-color: #fff;
      }
      .dificulty {
          display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
         background-color: #fff;
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
  & .infoItem:last-child {border: none;}
`

const ActiveSidebarWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: transparent;
  margin-left: 24px;
`
const SidebarItem = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  width: 100%;
  padding: 16px 0;
  margin-bottom: 24px;
  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #111111;
    padding: 0 16px 16px;
    margin-bottom: 16px;
    background-color: #fff;
    border-bottom: 1px solid  #DDE1E6;
  }
  .info {
    display: flex;
    align-items: center;
    padding: 0 16px;
     background-color: #fff;
    img {
      width: 40px;
      height: 40px;
      margin-right: 16px;
    }
    .name {
     background-color: #fff;
      .email {
      font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.01em;
        color: #697077;
        background-color: #fff;
      }
      .student {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #111111;
      background-color: #fff;
      }
    }
  }
`

export {SidebarItem,ActiveSidebarWrap,InfoList,Plans,CourseEmptyWrap, LeftAside, RightAsideWrap, MainContent, PlanListItemWrap}