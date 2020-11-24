import React from 'react';

// image
import ava from "../../../assets/media/icon/avatar.png";
import more from "../../../assets/media/icon/more.svg";
import lesson from '../../../assets/media/icon/lesson.svg';
import lesson2 from '../../../assets/media/icon/lesson2.svg';
import {
  CoursesItem
} from './studentStyled';

const StudentItem = ({number, open, note,activeNoteBlock}) => {
  return(
    <CoursesItem
      width={activeNoteBlock} >
      <div
        className="right">
        <div
          className="right__name">
          <img src={ava} alt="img"/>
          <div className="names">
            <h3>Cameron Jackson</h3>
            <p>cameron.jackson@example.com</p>
          </div>
        </div>
        <div className="navSection">
          <div className="lesson">
            {
              number === 0
                ?  <img onClick={(e) => note(e)}  src={lesson2} alt="icon"/>
                :  <img onClick={(e) => note(e)}  src={lesson} alt="icon"/>
            }
            <div className='number'>{number}</div>
          </div>
          <button
            className="more"
            onClick={(e) => open(e)}
          ><img src={more} alt="img"/></button>
        </div>
      </div>
    </CoursesItem>
  )
}

export {StudentItem};