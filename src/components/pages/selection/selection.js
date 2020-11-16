import React from 'react';
import styled from "styled-components";

const Selection = () => {
  return (
    <SelectionWrap>
      <p>Полезное</p>
    </SelectionWrap>
  )
}

export default Selection;

const SelectionWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`