import React from 'react';
import { connect  } from 'react-redux';

import Info from '../../info';
import ItemsLessons from '../../items-lessons';
import Modal from '../../modal';
import ScheduleEmpty from '../../schedule-empty';

import styled from "styled-components";

class Schedule extends React.Component {
  render() {
    const { schedule } = this.props;
    return (
      schedule // флаг для просмотра пустой страницы расписания
      ? <ScheduleContainer>
          <Info />
          <ItemsLessons />
          <Modal />
        </ScheduleContainer>
      : <ScheduleEmpty />
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
const mapStateToProps = ({ schedule }) => {
  return {
    schedule
  }
}
export default connect(mapStateToProps)(Schedule);