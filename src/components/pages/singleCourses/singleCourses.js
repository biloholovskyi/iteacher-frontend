import React from 'react';
import { Link } from "react-router-dom";
//styled
import {SingleCoursesWrap, ProgramSection, Banner, InfoBlock, DescSection} from './singleStyled';
// add icon/image
import arrow from '../../../assets/media/icon/arrow-left.svg';


const SingleCourses = () => {
  return (
    <div className='container'>
      <SingleCoursesWrap>
        <Link to='/addCourses'>
          <img src={arrow} alt="icon"/>
          <h4>Назад</h4>
        </Link>
        <div className='title'>Course name</div>
        <div className='desc'>Course topic</div>
        <Banner>
          <h2>Course name</h2>
        </Banner>
        <InfoBlock>
          <div className="infoItem">
            <div className="top">
              <h4>10</h4>
              <p>Уроков</p>
            </div>
            <div className="bottom">Длительность
              курса</div>
          </div>
          <div className="infoItem">
            <div className="top">
              <h4>60</h4>
              <p>Минут</p>
            </div>
            <div className="bottom">Длительность
              урока</div>
          </div>
          <div className="infoItem">
            <div className="top">
              <h4>А1</h4>
            </div>
            <div className="bottom">Уровень</div>
          </div>
          <div className="infoItem">
            <div className="top">
              <div className="dificulty">
                <div className="dificulty-item active"></div>
                <div className="dificulty-item active"></div>
                <div className="dificulty-item active"></div>
                <div className="dificulty-item active"></div>
                <div className="dificulty-item active"></div>
                <div className="dificulty-item active"></div>
                <div className="dificulty-item"></div>
              </div>
            </div>
            <div className="bottom">Сложность</div>
          </div>
        </InfoBlock>
        <DescSection>
          <h3>Описание</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet orci purus. Vestibulum commodo vulputate dignissim. Quisque ante ipsum, tempus eu tempus in, vulputate sit amet arcu. Vestibulum egestas nisl felis, vel convallis quam suscipit eu. Curabitur metus est, vehicula eget pulvinar a, aliquet nec odio. Aliquam eget tort... <a>Читать полностью</a></p>
        </DescSection>
        <ProgramSection>
          <h3>Программа</h3>
          <div className="programs">
            <div className="programItem"></div>
            <div className="programItem"></div>
            <div className="programItem"></div>
            <div className="programItem"></div>
            <div className="programItem"></div>
          </div>
          <button className='startBtn'>Начать курс</button>
        </ProgramSection>
      </SingleCoursesWrap>
    </div>
  )
}

export default SingleCourses;