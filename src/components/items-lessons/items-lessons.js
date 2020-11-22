import React from "react";
import styled from "styled-components";
import { connect  } from 'react-redux';

import BackTime from '../back-time';

import format from 'date-fns/format'
import ruLocale from "date-fns/locale/ru";
import { hendleItemLesson } from '../../action';
import { ItemLesson, DateTime, Title } from './items-lessons-style';

const ItemsLessons = ({ hendleItemLesson, active, lessons }) => {
  return (
    <ItemsLessonsContainer>{/* Список уроков */}
      {lessons.map((item) => {
        return (
          <ItemLesson 
            key={item.id} 
            activeItem={item.active}
            onClick={()=>{ hendleItemLesson(item.id) }}
          >
            <DateTime>
              <span className="date">
                {item.date && format(new Date(item.date),'cccccc, d LLLL',{locale: ruLocale})}
              </span>
              <span className="time">{item.time}</span>
            </DateTime>
            <Title className="item-lesson_title">{item.title}</Title>
            {/* отсчет времени */}
            <BackTime time={item.date} />
            {!item.hw && // флаг выполнености Дом Задания
              <span className="item-lesson_hwfalse">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0L20 18H0L10 0ZM3.39903 16H16.601L10 4.11825L3.39903 16ZM11 12H9V9H11V12ZM11 15H9V13H11V15Z" fill="#DA1E28"/>
                </svg>
                <span>Домашнее задание не выполнено</span>
              </span>
            }
          </ItemLesson>
        );
      })}
      <div className={active ? "modalGrey":""}></div>
    </ItemsLessonsContainer>
  );
};
const mapStateToProps = ({ lessons, active }) => {
  return {
    lessons,
    active
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    hendleItemLesson: (id) => {
      dispatch(hendleItemLesson(id))
    }
  }
}
//то же самое что и строки с 57-63
// const mapDispatchToProps = {
//   lessonsLoaded
// }
const ItemsLessonsContainer = styled.div`
  width: 74%;
  .modalGrey {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }
`
export default connect(mapStateToProps,mapDispatchToProps)(ItemsLessons);
