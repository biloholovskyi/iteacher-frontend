import React from 'react';


// image
import ava from '../../assets/media/icon/avatar.png';
import close from '../../assets/media/icon/close.svg';
import more from '../../assets/media/icon/more.svg';

// styled
import {StudentsModalWrap,StudentModal} from './stydentStyled';

const StudentsModal = ({closed}) => {

  return (
    <StudentsModalWrap>
      <StudentModal className='studentModal'>
        <img className={'more'} src={more} alt="icon"/>
        <img className={'close'}
             src={close}
             alt="icon"
             onClick={(e) => {closed(e)}}
        />
        <div className="nameBlock">
          <img className={'photo'} src={ava} alt="icon"/>
          <div className="names">
            <div className="name">Cameron Jackson</div>
            <div className="email">cameron.jackson@example.com</div>
          </div>
        </div>
        <h3>Активные курсы</h3>
        <div className="lessonsInfo">
          <h4>General English</h4>
          <p>Ближайший урок: Завтра, 18:30</p>
        </div>
      </StudentModal>
    </StudentsModalWrap>
  )
}

export default StudentsModal;