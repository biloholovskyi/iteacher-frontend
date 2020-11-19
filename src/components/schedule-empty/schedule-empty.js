import React from 'react';
import styled from 'styled-components';

const ScheduleEmpty = () => {
  return (
    <ScheduleEmptyContainer>
      <Schedule>
        <div className="border"></div>
        <div className="title">У вас нет расписания</div>
        {/* <div className="desription">Добавьте учеников к вашим курсам</div> */}
      </Schedule>
    </ScheduleEmptyContainer>
  );
};

const ScheduleEmptyContainer = styled.div`
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
const Schedule = styled.div`
  .border {
    border-radius: 16px;
    width: 360px;
    height: 360px;
    border: 2px dashed var(--mainGrey20);
  }
  .title {
    color: var(--mainGrey60);
    font-weight: 400;
    font-size: 32px;
    text-align: center;
    margin-top: 36px;
  }
  .desription {
    color: var(--mainGrey60);
    font-weight: 400;
    text-align: center;
    margin-top: 16px;
    font-size: 16px;
  }
`
export default ScheduleEmpty;