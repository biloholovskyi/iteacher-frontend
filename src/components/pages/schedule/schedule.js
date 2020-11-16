import React from 'react';
import styled from "styled-components";

const Schedule = () => {
  return (
    <ScheduleWrap>
      <p>Расписание</p>
    </ScheduleWrap>
  )
}

export default Schedule;

const ScheduleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`