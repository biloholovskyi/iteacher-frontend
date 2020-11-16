import React from "react";
import styled from "styled-components";

// images/icon
import bell from '../../assets/media/icon/content.png';
import ava from '../../assets/media/icon/avatar.png';
import { Link } from "react-router-dom";

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
  position: relative;
`
const Logo = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  color: #4F7FFF;
  letter-spacing: -0.01em;
  margin: 0;
`
const NavLink = styled.a`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #111111;
    letter-spacing: -0.01em;
    margin-right: 40px;
    
    &:last-child {
      margin-right: 0;
    }
`
const NavLinks = styled.nav`
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
    &:last-child {
      margin-right: 0;
    }
  }
`;
const AvatarBlock = styled.div`
  .bell {
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
    margin-right: 24px;
  }
  .ava {
    width: 40px;
    height: 40px;
    object-fit: contain;
    object-position: center;
  }
`

const Header = () => {
  return (
    <HeaderWrap>
      <Logo>Logo</Logo>
      <NavLinks>
        <Link to="/schedule">Расписание</Link>
        <NavLink>Ученики</NavLink>
        <NavLink>Домашние задания</NavLink>
        {/* <NavLink>Курсы</NavLink> */}
        <Link to="/courses">Курсы</Link>
        <NavLink>Полезное</NavLink>
      </NavLinks>
      <AvatarBlock>
        <img className="bell" src={bell} alt="img"/>
        <img className="ava" src={ava} alt="img"/>
      </AvatarBlock>
    </HeaderWrap>
  )
}

export default Header;