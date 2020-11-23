import styled from "styled-components";

const StudentsWrap = styled.div`
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
    align-items: flex-start;
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
     max-width: ${props => props.width ? '774px' : '100%'};
     position: relative;
     z-index: 11;
    .right {
      background-color: #fff;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: none;
      cursor: pointer;
      .right__name {
          display: flex;
          align-items: center;
           background-color: #fff;
          justify-content: flex-start;
          border: none;
          width: 100%;
          cursor: pointer;
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
        .names {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          background-color: #fff;
          cursor: pointer;
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
      .navSection {
            display: flex;
            flex-direction: row;
            align-items: center;
             background-color: #fff;
            .lesson { 
                display: flex;
                flex-direction: row;
                align-items: center;
                padding-right: 24px;
                margin-right: 24px;
                border-right: 1px solid #DDE1E6;
                background-color: #fff;
                img {
                  width: 24px;
                  height: 24px;
                  object-fit: contain;
                  object-position: center;
                  margin-right: 16px;
                }
                .number {
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 22px;
                letter-spacing: -0.01em;
                color: #697077;
                width: 20px;
                background-color: #fff;
                }
            }
        }
    }
`
const NotesWrap = styled.div`
   width: 100%;
   height: 100%;
   background-color: rgba(0,0,0,.2);
   position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
`
const Notes = styled.div`
     background: #fff;
      width: 100%;
      max-width: 594px;
      min-height: 100vh;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 10;
      padding: 28px 0 24px;
      box-shadow: 0px 0px 6px rgba(105, 112, 119, 0.08), 0px 4px 8px rgba(105, 112, 119, 0.1);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    .notesHeader {
      width: 100%;
      display: flex;
      position: relative;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px 28px;
      border-bottom: 1px solid #DDE1E6;
      background-color: #fff;
      h3 {
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.01em;
        color: #111111;
        background-color: #fff;
      }
      img {
        width: 24px;
        height: 24px;
        object-fit: contain;
        object-position: center;
        background-color: #fff;
        cursor:pointer;
      }
    }
`
const InputWrap = styled.div`
    padding: 0 24px;
    background-color: #fff;
  input {
      width: 100%;
      background: #DDE1E6;
      opacity: 0.8;
      border-radius: 8px;
      min-height: 48px;
      border: none;
      padding-left: 16px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #111111;
      opacity: 0.8;
    &::placeholder {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.01em;
      color: #697077;
      opacity: 0.8;
    }
  }
`
export {
  DropDown,
  Input,
  SearchBlock,
  Caption,
  StudentsWrap,
  Title,
  SortBlock,
  CoursesList,
  CoursesItem,
  Notes,
  NotesWrap,
  InputWrap
}