import React from "react";
import { Link } from "react-router-dom";

// styled
import {AvatarBlock,NavList, Logo, HeaderWrap} from './headerStyle';

// images/icon
import bell from '../../assets/media/icon/content.png';
import ava from '../../assets/media/icon/avatar.png';

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

export default Header;