import React from 'react';

import Info from '../../info';
import ItemsLessons from '../../items-lessons';
import Modal from '../../modal';

import styled from "styled-components";

class Schedule extends React.Component {
  state = {active: false};

  activeItemLesson = () => {
    this.setState({
      active: !this.state.active
    })
  };

  render() {
    return (
      <ScheduleContainer>
        <Info />
        <ItemsLessons active={this.state.active} activeItemLesson={this.activeItemLesson} />
        <Modal active={this.state.active}/>
      </ScheduleContainer>
    );
  }
  
};
const ScheduleContainer = styled.div`
  padding: 24px 48px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: #F8F9FB;
`
export default Schedule;