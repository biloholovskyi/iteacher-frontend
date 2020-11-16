import React from 'react';
import { Link } from "react-router-dom";
// styled
import {BgWrap, TemplateItemWrap} from "./addCoursesStyle";

const TemplateItem = () => {
  return(
    <TemplateItemWrap>
      <Link to='/SingleCourses'>
        <BgWrap>
          <h3>Course name</h3>
        </BgWrap>
        <h4 className='title'>Course name</h4>
        <p className='desc' >Course topic</p>
      </Link>
    </TemplateItemWrap>
  )
}

export default TemplateItem;