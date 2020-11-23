import React from "react";
import styled from "styled-components";
import { connect  } from 'react-redux';

// styled
import {AvatarBlock,NavList, Logo, HeaderWrap} from './headerStyle';

// images/icon
import bell from '../../assets/media/icon/content.png';
import ava from '../../assets/media/icon/avatar.png';
import { Link } from "react-router-dom";

// const Header = ({active}) => {
//   return (
//     <HeaderWrap active={active}>
//       <Logo>Logo</Logo>
//       <NavLinks>
//         <Link to="/schedule">Расписание</Link>
//         <NavLink>Ученики</NavLink>
//         {/* <NavLink>Домашние задания</NavLink> */}
//         <Link to="/homework">Домашние задания</Link>
//         {/* <NavLink>Курсы</NavLink> */}
//         <Link to="/courses">Курсы</Link>
//         <Link to="/usefull">Полезное</Link>
//       </NavLinks>
const Header = () => {
  return (
    <HeaderWrap>
      <Link to='/'>
        <Logo>Logo</Logo>
      </Link>
      <NavList>
        <Link to='/schedule'>Расписание</Link>
        <Link to='/students'>Ученики</Link>
        <Link to='/homework'>Домашние задания</Link>
        <Link to='/courses' >Курсы</Link>
        <Link to='/NoneCourse'>Полезное</Link>
      </NavList>
      <AvatarBlock>
        <img className="bell" src={bell} alt="img"/>
        <img className="ava" src={ava} alt="img"/>
      </AvatarBlock>
    </HeaderWrap>
  )
}
const mapStateToProps = ({ active }) => {
  return {
    active
  }
}
export default connect(mapStateToProps)(Header);