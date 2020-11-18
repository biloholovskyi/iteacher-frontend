import React from 'react';

//styled
import {ProgramItemWrap} from '../singleCourses/singleStyled';

const ProgramItem = ({ lastElement }) => {
  return (
    <ProgramItemWrap last={lastElement} >
      <div className="circle"></div>
      <div className="text">Lorem ipsum dolor sit amet</div>
    </ProgramItemWrap>
  )
}

export default ProgramItem;
