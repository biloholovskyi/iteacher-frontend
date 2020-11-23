import React from 'react';

//styled
import {ActiveSidebarWrap, SidebarItem} from './courseEmptyStyled';
// image
import ava from '../../../assets/media/icon/avatar.png'

const ActiveSidebar = () => {
  return(
    <ActiveSidebarWrap>
      <SidebarItem>
        <div className="title">Ученик</div>
        <div className="info">
          <img src={ava} alt="icon"/>
          <div className="name">
            <p className={'student'}>Cameron Jackson</p>
            <p className={'email'}>cameron.jackson@example.com</p>
          </div>
        </div>
      </SidebarItem>
      <SidebarItem>
        <div className="title">Домашние задания</div>
        <div className="info">
          <div className="name">
            <p className={'student'}>#2 Lesson name</p>
            <p className={'email'}>Надо проверить до: Завтра, 19:00</p>
          </div>
        </div>
      </SidebarItem>
      <SidebarItem>
        <div className="title">Ближайшее занятие</div>
        <div className="info">
          <div className="name">
            <p className={'student'}>#1 Lesson name</p>
            <p className={'email'}>Завтра, 19:00</p>
          </div>
        </div>
      </SidebarItem>
    </ActiveSidebarWrap>
  )
}

export default ActiveSidebar;