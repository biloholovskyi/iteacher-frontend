import React from 'react';
import {Link} from "react-router-dom";
import {NonoCoursesWrap,AddCourse} from './noneCoursesStyled';
// image
import square from '../../../assets/media/icon/square.svg';
import plus from "../../../assets/media/icon/plus.svg";

const NoneCourses = () => {
  return (
    <NonoCoursesWrap>
      <img src={square} alt="image"/>
      <p>У вас нет запланированых занятий</p>
      <AddCourse>
        <Link to='/addCourses'>Добавить курс</Link>
        <img src={plus} alt="icon"/>
      </AddCourse>
    </NonoCoursesWrap>
  )
}

export default NoneCourses;
