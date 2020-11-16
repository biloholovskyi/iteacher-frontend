import React from 'react';
import styled from "styled-components";

const MyTemplates = () => {
  return (
    <MyWrap>
      <p>2</p>
    </MyWrap>
  )
}

export default MyTemplates;

const MyWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
   height: 100vh;
`