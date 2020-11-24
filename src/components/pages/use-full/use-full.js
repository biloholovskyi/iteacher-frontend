import React from 'react';
import { connect  } from 'react-redux';

import ItemUseFull from '../../item-use-full';

import styled from "styled-components";

class UseFull extends React.Component {
  render() {
    const { itemsUseFull } = this.props;
      return (
        <UseFullContainer>
          <Title>Полезное</Title>
          <ItemUseFull itemsUseFull={itemsUseFull}/>
        </UseFullContainer>
      );
  }
};
const UseFullContainer = styled.div`
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
const mapStateToProps = ({ itemsUseFull }) => {
  return {
    itemsUseFull
  }
}
export default connect(mapStateToProps)(UseFull);