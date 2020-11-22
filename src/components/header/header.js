import React from "react";
import { Link , NavLink} from "react-router-dom";

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
        <NavLink to='/schedule'>Расписание</NavLink>
        <NavLink to='/students'>Ученики</NavLink>
        <NavLink to='/homework'>Домашние задания</NavLink>
        <NavLink to='/courses' >Курсы</NavLink>
        <NavLink to='/NoneCourse'>Полезное</NavLink>
      </NavList>
      <AvatarBlock>
        <img className="bell" src={bell} alt="img"/>
        <img className="ava" src={ava} alt="img"/>
      </AvatarBlock>
    </HeaderWrap>
  )
}

export default Header;