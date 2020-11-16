import styled from "styled-components";

const AddCoursesWrap = styled.div`
  width: 100%;
  max-width: 888px;
  margin: 0 auto;
  padding-top: 100px;
`
const TitleSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 26px;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 36px;
  }
`
const TabsHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #DDE1E6;
`

const TabsHeadNav = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #697077;
  padding-bottom: 20px;
  cursor: pointer;
 &.tabs-active {
    color: #000;
    padding-bottom: 18px;
    border-bottom: 2px solid #4F7FFF;
  }
  &:first-child {
    margin-right: 32px;
  }
`

export {AddCoursesWrap, TitleSection, TabsHead, TabsHeadNav}