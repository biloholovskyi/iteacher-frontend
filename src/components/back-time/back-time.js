import React, { useState } from 'react';
import styled from 'styled-components';

const BackTime = ({ time, HW }) => {
  const [timer,setTimer] = useState(new Date(time).getTime() - new Date().getTime())
  const hour = Math.floor((timer/(1000*60*60)));
  const min = Math.floor((timer/1000/60) % 60)
  const sec = Math.floor((timer/1000) % 60);
  // отсчет времени
  setInterval(() => {
    setTimer(new Date(time).getTime() - new Date().getTime())
  }, 1000);
  return (
    <Count HW={HW}>
      {HW
      ? 
      hour<=24 && <svg style={{marginRight: "18px"}} width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0L20 18H0L10 0ZM3.39903 16H16.601L10 4.11825L3.39903 16ZM11 12H9V9H11V12ZM11 15H9V13H11V15Z" fill="#DA1E28"/>
      </svg> 
      :
      hour<=24 && <svg style={{marginRight: "12px"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13 6V12H17V14H13H11V12V6H13Z" fill="#697077"/>
      </svg>}
      {HW 
      ?
      hour<=24 && `Осталось ${hour<10?`0${hour}`:hour}:${min<10?`0${min}`:min}:${sec<10?`0${sec}`:sec}`
      :
      timer <= 0 ? `00:00:00` : hour<=24 && `Начнется через ${hour<10?`0${hour}`:hour}:${min<10?`0${min}`:min}:${sec<10?`0${sec}`:sec}`
      }
    </Count>
  );
};

const Count = styled.span`
  display: flex;
  align-items: center;
  justify-self: right;
  font-size: 14px;
  color: ${props=>props.HW ? "var(--mainRed)" : "var(--mainGrey60)"};
  font-weight: ${props=>props.HW ? 500 : 400};
`
export default BackTime;