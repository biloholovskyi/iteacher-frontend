import React from 'react';

import {StudentEmptyWrap} from './studentEmptyStyled';
// image
import square from '../../../assets/media/icon/square.svg';

const StudentEmpty = () => {
  return (
    <StudentEmptyWrap>
      <img src={square} alt="image"/>
      <p>У вас нет учеников</p>
      <div className="smallTitle">Добавьте учеников к вашим курсам</div>
    </StudentEmptyWrap>
  )
}

export default StudentEmpty;
