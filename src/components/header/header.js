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
      <Link activeClassName="active" to='/'>
        <Logo>Logo</Logo>
      </Link>
      <NavList>
        <Link activeClassName="active" to='/schedule'>Расписание</Link>
        <Link activeClassName="active" to='/students'>Ученики</Link>
        <Link activeClassName="active" to='/homework'>Домашние задания</Link>
        <Link activeClassName="active" activeStyle={{ color: 'red' }}  to='/courses' >Курсы</Link>
        <Link activeClassName="active" to='/selection'>Полезное</Link>
      </NavList>
      <AvatarBlock>
        <img className="bell" src={bell} alt="img"/>
        <img className="ava" src={ava} alt="img"/>
      </AvatarBlock>
    </HeaderWrap>
  )
}

export default Header;