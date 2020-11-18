import React from 'react';
import CourseTabs from './courseTabs';
import {Link} from "react-router-dom";

// add icon/image
import close from "../../../assets/media/icon/close.svg";

// style
import {AddCoursesWrap, TitleSection} from "./addCoursesStyle";
import {WithOutHeaderContainer} from "../singleCourses/singleStyled";



const AddCourses = () => {
  return (
    <WithOutHeaderContainer>
      <Link to='/Courses' className='close'>
        <img src={close} alt="icon"/>
      </Link>
      <div className='container'>
        <AddCoursesWrap>
          <TitleSection>
            <h1>Выберите шаблон</h1>
          </TitleSection>
          {/*add tabs */}
          <CourseTabs />
        </AddCoursesWrap>
      </div>
    </WithOutHeaderContainer>
  )
}

export default AddCourses;

