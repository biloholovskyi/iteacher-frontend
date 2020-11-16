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
    margin-bottom: 32px;
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

const TabsBody = styled.div`
   display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const CommonWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
     width: 100%; 
`
const BgWrap = styled.div`
    position: relative;
    width: 204px;
    height: 204px;
    background: linear-gradient(60.64deg, #0093E9 0%, #80D0C7 100%);
    border-radius: 8px;
    padding: 15px;
    display: flex;
    align-items: flex-end;
    margin-bottom: 16px;
    
    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 32px;
      letter-spacing: -0.01em;
      color: #fff;
      background-color: transparent;
    }
`
const TemplateItemWrap = styled.div`
  width: 100%;
  max-width: calc(100% / 4);
  height: 100%;
  // margin-right: 24px;
  margin-bottom: 24px;
  a {
    display: block;
    text-decoration: none;
  }
  .title {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #111111;
  }
  .desc {
    color: #697077;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
  }
`
export {AddCoursesWrap, TitleSection, TabsHead, TabsHeadNav, TabsBody, CommonWrap, BgWrap, TemplateItemWrap}