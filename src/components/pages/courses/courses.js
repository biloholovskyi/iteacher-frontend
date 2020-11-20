import React from 'react';
import {CoursesItems} from './CoursesItem';
import {CoursesItemsV2} from './CoursesItemV2';
import { Link } from "react-router-dom";
// style
import {
  DropDown,
  Input,
  SearchBlock,
  AddCourse,
  Caption,
  CourseWrap,
  Title,
  SortBlock,
  CoursesList
} from './courseStyled';

// image/icon
import plus from '../../../assets/media/icon/plus.svg';
import search from '../../../assets/media/icon/search.svg';
import arrow from '../../../assets/media/icon/arrow.svg';
import sort from '../../../assets/media/icon/sort.svg';

const Courses = () => {
  return (
    <CourseWrap>
      <div className='container'>
        <Caption>
          <Title>Курсы</Title>
          <AddCourse>
            <Link to='/addCourses'>Добавить курс
              <img src={plus} alt="icon"/>
            </Link>
          </AddCourse>
        </Caption>
        <Caption>
          <SearchBlock>
            <Input>
              <img src={search} alt="icon"/>
              <input type="text" placeholder="Поиск"/>
            </Input>
            <DropDown>
              <p>Ученики</p>
              <img src={arrow} alt="icon"/>
            </DropDown>
          </SearchBlock>
          <SortBlock>
            <img src={sort} alt="icon"/>
            <p>Сортировать по</p>
            <p><b>алфавиту</b></p>
            <img src={arrow} alt="icon"/>
          </SortBlock>
        </Caption>
        {/*ADD COURSES LIST*/}
        <CoursesList>
          <CoursesItems/>
          <CoursesItems/>
          <CoursesItemsV2/>
        </CoursesList>
      </div>
    </CourseWrap>
  )
}

export default Courses;