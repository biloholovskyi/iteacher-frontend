import styled from "styled-components";

const CourseWrap = styled.div`
  padding-top: 122px;
`
const Caption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`
const Title = styled.h2`
    font-style: normal;
    font-weight: bold; 
    font-size: 28px;
    line-height: 36px;
    color: #000000;
`
const AddCourse = styled.button`
  background: #4F7FFF;
  box-shadow: 0px 0px 1px rgba(105, 112, 119, 0.12), 0px 1px 2px rgba(105, 112, 119, 0.2);
  border-radius: 6px;
  border: none;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  cursor: pointer;
  img {
    background-color: transparent;
      width: 24px;
      height: 24px;
      object-fit: contain;
      object-position: center;
      margin-right: 8px;
  }
  a {
    font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  text-decoration: none;
  background-color: transparent;
  align-items: center;
    display: flex;
    flex-direction: row-reverse;
    padding: 14px 20px;
  }
`
const SearchBlock = styled.div`
   display: flex;
    align-items: center;
    justify-content: center;
`
const Input = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      background-color: #DDE1E6;
      opacity: 0.8;
      border-radius: 8px;
      width: 100%;
       min-width: 318px;
      min-height: 48px;
      padding: 0 16px;
      margin-right: 20px;
      img {
        background-color: transparent;
        width: 24px;
        height: 24px;
        object-fit: contain;
        object-position: center;
        margin-right: 12px;
      }
      input {
        background-color: transparent;
        border: none;
        width: 100%;
        height: 100%;
        padding: 12px 0px;
        border-radius: 8px;
      }
`
const DropDown = styled.div`
      display: flex;
      align-items: center;
       justify-content: space-between;
      position: relative;
      background-color: #DDE1E6;
      opacity: 0.8;
      border-radius: 8px;
      width: 100%;
       min-width: 207px;
      min-height: 48px;
      padding: 12px 16px;
      cursor: pointer;
      img {
        background-color: transparent;
        width: 24px;
        height: 24px;
        object-fit: contain;
        object-position: center;
      }
      p {
        display: inline-block;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #697077;
        opacity: 0.8;
        background-color: transparent;
      }
`
const SortBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
        background-color: transparent;
        width: 24px;
        height: 24px;
        object-fit: contain;
        object-position: center;
      }
      & img:first-child {
        margin-right: 8px;
      } 
      & p:nth-child(2) {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #697077;
        margin-right: 8px;
        cursor: pointer;
      }
      & p:nth-child(3) {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #111111;
        cursor: pointer;
      }
`
const CoursesList = styled.div`
   display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
`
const CoursesItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
    border-radius: 8px;
    margin-bottom: 8px;
    padding: 19px 24px;
     background-color: #fff;
     cursor: pointer;
    .left {
    background-color: #fff;
      flex:1;
      h3 {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
         background-color: #fff;
      }
      p {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #697077;
        background-color: #fff;
      }
    }
    .right {
      background-color: #fff;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .right__name {
          display: flex;
          align-items: center;
           background-color: #fff;
          justify-content: center;
      
        img {
          width: 40px;
          height: 40px;
          object-fit: contain;
          object-position: center;
          margin-right: 16px;
        }
        h3 {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 22px;
           background-color: #fff;
           color: #697077;
        }
      }
      .names {
      position: relative;
    left: 15px;
          h3, .all {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 22px;
            color: #697077;
          }
        }
      .more {
        background-color: #fff;
        border: none;
        cursor: pointer;
        img {
          background-color: #fff;
          width: 24px;
          height: 24px;
          object-fit: contain;
          object-position: center;
        }
      }
      .images {
        display: flex;
        align-items: center;
        justify-content: flex-start;
         background-color: #fff;
         position: relative;
           img {
          width: 40px;
          height: 40px;
          object-fit: contain;
          object-position: center;
          margin-right: 16px;
          border: 4px solid #fff;
          border-radius: 50%;
        }
        & img:nth-child(2){
          left: calc(100% - 40px/2 - 16px );
            position: absolute;
        }
        
        & img:nth-child(3) {
          position: absolute;
          left: calc(100% - 40px/2 - -4px );
        }
        .all {
           width: 40px;
           height: 40px;
           border: 4px solid #fff;
           border-radius: 50%;
           background-color: #000;
           position: absolute;
            left: calc(100% - 40px/2 - -24px );
            color: #fff;
             display: flex;
              align-items: center;
              justify-content: center;
              font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            cursor: pointer;
        }
      }
    }
`
export {
  DropDown,
  Input,
  SearchBlock,
  AddCourse,
  Caption,
  CourseWrap,
  Title,
  SortBlock,
  CoursesList,
  CoursesItem
}