import React from 'react';
import {CoursesItems} from './CoursesItem';
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
  CoursesList,
  CoursesItem
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
        <div className="row">
          <div className="col-12">
            <Caption>
              <Title>Курсы</Title>
              <AddCourse>Добавить курс
                <img src={plus} alt="icon"/>
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
              <CoursesItems/>
            </CoursesList>
          </div>
        </div>
      </div>
    </CourseWrap>
  )
}

export default Courses;