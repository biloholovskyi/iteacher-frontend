import React from 'react';
import CourseTabs from './courseTabs';


// style
import {AddCoursesWrap, TitleSection} from "./addCoursesStyle";

const AddCourses = () => {
  return (
    <div className='container'>
      <AddCoursesWrap>
        <TitleSection>
          <h1>Выберите шаблон</h1>
        </TitleSection>
        {/*add tabs */}
        <CourseTabs />
      </AddCoursesWrap>
    </div>
  )
}

export default AddCourses;

