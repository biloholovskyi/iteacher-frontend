import React from "react";
import styled from "styled-components";
import { connect  } from 'react-redux';

import format from 'date-fns/format'
import ruLocale from "date-fns/locale/ru";
import { hendleItemLesson } from '../../action';
import { ItemLesson, DateTime, Title, Count } from './items-lessons-style';

const ItemsLessons = ({ hendleItemLesson, activeItemLesson, active, lessons }) => {
  return (
    <ItemsLessonsContainer>
      {lessons.map((item) => {
        const nowBackTime = new Date(item.date).getTime() - new Date().getTime();
        const hour = Math.floor((nowBackTime/(1000*60*60)));
        const min = Math.floor((nowBackTime/1000/60) % 60)
        const sec = Math.floor((nowBackTime/1000) % 60);
        return (
          <ItemLesson 
            key={item.id} 
            activeItem={item.active} 
            // onClick={()=>console.log(item.id)}// надо переделать!!!
            onClick={()=>{
              activeItemLesson()
              hendleItemLesson(item.id)
            }}
            >
            <DateTime>
              <span className="date">
                {item.date && format(new Date(item.date),'cccccc, d LLLL',{locale: ruLocale})}
              </span>
              <span className="time">{item.time}</span>
            </DateTime>
            <Title className="item-lesson_title">{item.title}</Title>
            <Count className="item-lesson_count">
              {hour<=24 && <svg style={{marginRight: "12px"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13 6V12H17V14H13H11V12V6H13Z" fill="#697077"/>
              </svg>}
              {nowBackTime <= 0 ? `00:00:00` : hour<=24 && `Начнется через ${hour}:${min}:${sec}`}
            </Count>
            {!item.hw && 
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
      <div 
        // onClick={hendleItemLesson} // временное решение
        className={active ? "modalGrey":""}
      ></div>
    </ItemsLessonsContainer>
  );
};
const mapStateToProps = ({ lessons }) => {
  return {
    lessons
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
