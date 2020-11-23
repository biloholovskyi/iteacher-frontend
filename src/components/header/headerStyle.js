import styled from "styled-components";

const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 20px 48px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px 0px 4px rgba(105, 112, 119, 0.08), 0px 4px 4px rgba(105, 112, 119, 0.16);
  z-index: 10;
  a {
   text-decoration: none;
  }
`
const Logo = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  color: #4F7FFF;
  letter-spacing: -0.01em;
  margin: 0;
  cursor: pointer;
`
const NavList = styled.nav`
    a {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #111111;
      letter-spacing: -0.01em;
      margin-right: 40px;
      text-decoration: none;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
    }
`
const AvatarBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  .bell {
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
    margin-right: 24px;
    cursor: pointer;
  }
  .ava {
    width: 40px;
    height: 40px;
    object-fit: contain;
    object-position: center;
    cursor: pointer;
  }
`

export {AvatarBlock, NavList, Logo, HeaderWrap}