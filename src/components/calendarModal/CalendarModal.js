import React from 'react';
import Calendar from './calendar';
//styled
import {CalendarModalWrapp, CalendarBody} from './CalendarStyled';
// icon
import closed from '../../assets/media/icon/close.svg';

const CalendarModal = ({ close, finish }) => {
  return (
    <CalendarModalWrapp>
      <CalendarBody className={'studentModal'}>
        <img className={'close'} src={closed} alt="icon" onClick={(e) => {close(e)}}/>
        <h3>Выберите дни занятий</h3>
        <Calendar/>
        <button
          className={'addLesson'}
          onClick={(e) => {finish(e)}}
        >Добавить 1 урок в календарь</button>
      </CalendarBody>
    </CalendarModalWrapp>
  )
}

export default CalendarModal;