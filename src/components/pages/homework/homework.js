import React from 'react';
import { connect  } from 'react-redux';

import HomeworkEmpty from '../../homework-empty';
import ItemHomeWork from '../../item-home-work';

import styled from "styled-components";

class Homework extends React.Component {
  render() {
    const { HW, itemsHomeWork } = this.props;
      return (
        HW 
        ? <HomeworkContainer>
            <Title>Домашние задания</Title>
            <ItemHomeWork itemsHomeWork={itemsHomeWork}/>
          </HomeworkContainer>
        : <HomeworkEmpty />
      );
  }
};
const HomeworkContainer = styled.div`
  padding: 120px 48px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #F8F9FB;
`
const Title = styled.h1`
  color: var(--mainBlack);
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 28px;
`
const mapStateToProps = ({ HW, itemsHomeWork }) => {
  return {
    HW,
    itemsHomeWork
  }
}
export default connect(mapStateToProps)(Homework);