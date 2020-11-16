import React from 'react';
import styled from "styled-components";

const HomeWork = () => {
  return (
    <HomeWorkWrap>
      <p>Домашние задания</p>
    </HomeWorkWrap>
  )
}

export default HomeWork;

const HomeWorkWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`