import React from 'react';
import styled from "styled-components";

const Students = () => {
  return (
    <StudentsWrap>
      <p>Ученики</p>
    </StudentsWrap>
  )
}

export default Students;

const StudentsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`