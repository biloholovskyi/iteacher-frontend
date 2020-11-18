import React from 'react';

// image
import ava from "../../../assets/media/icon/avatar.png";
import more from "../../../assets/media/icon/more.svg";

import {
  CoursesItem
} from './courseStyled';

const CoursesItemsV2 = () => {
  return(
    <CoursesItem>
      <div className="left">
        <h3>General English</h3>
        <p>Ближайший урок: Завтра, 18:30</p>
      </div>
      <div className="right">
        <div className="right__img images">
          <img src={ava} alt="img"/>
          <img src={ava} alt="img"/>
          <img src={ava} alt="img"/>
          <div className="all">+8</div>
        </div>
        <div className="right__name names">
          <h3>Cameron Jackson,</h3>
          <h3>Vicki Simmmons,</h3>
          <h3> Brandon Garcia,</h3>
          <div className="all">+8</div>
        </div>
        <button className="more"><img src={more} alt="img"/></button>
      </div>
    </CoursesItem>
  )
}

export {CoursesItemsV2};