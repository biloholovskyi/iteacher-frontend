import React, { useState } from 'react';
import styled from 'styled-components';

const BackTime = ({ time }) => {
  const [timer,setTimer] = useState(new Date(time).getTime() - new Date().getTime())
  const hour = Math.floor((timer/(1000*60*60)));
  const min = Math.floor((timer/1000/60) % 60)
  const sec = Math.floor((timer/1000) % 60);
  // отсчет времени
  setInterval(() => {
    setTimer(new Date(time).getTime() - new Date().getTime())
  }, 1000);

  return (
    <Count>
      {hour<=24 && <svg style={{marginRight: "12px"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13 6V12H17V14H13H11V12V6H13Z" fill="#697077"/>
      </svg>}
      {timer <= 0 ? `00:00:00` : hour<=24 && `Начнется через ${hour}:${min}:${sec}`}
    </Count>
  );
};
const Count = styled.span`
  display: flex;
  align-items: center;
  justify-self: right;
  font-size: 14px;
  color: var(--mainGrey60);
  font-weight: 400;
`
export default BackTime;