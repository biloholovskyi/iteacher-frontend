import React from 'react';
import styled from "styled-components";

const Common = () => {
  return (
    <CommonWrap>
      <p>1</p>
    </CommonWrap>
  )
}

export default Common;

const CommonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
   height: 100vh;
`