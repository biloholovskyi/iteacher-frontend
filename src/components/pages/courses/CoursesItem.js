import React from 'react';

// image
import ava from "../../../assets/media/icon/avatar.png";
import more from "../../../assets/media/icon/more.svg";

import {
  CoursesItem
} from './courseStyled';

const CoursesItems = () => {
  return(
    <CoursesItem>
      <div className="left">
        <h3>General English</h3>
        <p>Ближайший урок: Завтра, 18:30</p>
      </div>
      <div className="right">
        <div className="right__name">
          <img src={ava} alt="img"/>
          <h3>Cameron Jackson</h3>
        </div>
        <button className="more"><img src={more} alt="img"/></button>
      </div>
    </CoursesItem>
  )
}

export {CoursesItems};