import React from 'react';
import styled from "styled-components";

const Home = () => {
  return (
    <HomeWrap>
      <p>Home</p>
    </HomeWrap>
  )
}

export default Home;

const HomeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
   height: 100vh;
`