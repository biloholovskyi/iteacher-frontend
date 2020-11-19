import React from 'react';
import styled from 'styled-components';

const HomeworkEmpty = () => {
  return (
    <HomeworkEmptyContainer>
      <Homework>
        <div className="border"></div>
        <div className="title">У вас нет домашних заданий</div>
      </Homework>
    </HomeworkEmptyContainer>
  );
};

const HomeworkEmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #F8F9FB;
`
const Homework = styled.div`
  width: 360px;
  height: 360px;
  .border {
    border-radius: 16px;
    width: 100%;
    height: 100%;
    border: 2px dashed var(--mainGrey20);
  }
  .title {
    color: var(--mainGrey60);
    font-weight: 400;
    font-size: 32px;
    text-align: center;
    margin-top: 36px;
  }
`
export default HomeworkEmpty;