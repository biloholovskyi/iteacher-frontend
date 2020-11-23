import React from 'react';

import close from "../../../assets/media/icon/close.svg";
import {InputWrap, NotesWrap,Notes} from "./studentStyled";

const Note = ({closed}) => {
  return (
    <NotesWrap>
      <Notes>
        <div className="notesHeader">
          <h3>Заметки</h3>
          <img onClick={(e) => {closed(e)}} src={close} alt="icon"/>
        </div>
        <InputWrap>
          <input type="text" placeholder='Текст заметки'/>
        </InputWrap>
      </Notes>
    </NotesWrap>
  )
}

export default Note;
