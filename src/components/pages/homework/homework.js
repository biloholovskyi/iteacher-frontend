import React from 'react';
import { connect  } from 'react-redux';

import HomeworkEmpty from '../../homework-empty';

import styled from "styled-components";

class Homework extends React.Component {
  render() {
    const { HW } = this.props;
      return (
        HW 
        ? <HomeworkContainer>
            Homework
          </HomeworkContainer>
        : <HomeworkEmpty />
      );
  }
};

const HomeworkContainer = styled.div`

`
const mapStateToProps = ({ HW }) => {
  return {
    HW
  }
}
export default connect(mapStateToProps)(Homework);