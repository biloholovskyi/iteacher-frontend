import React from "react";
import {NotesBody} from "./studentStyled";
import NotesItem from "./NotesItem";

const NotesList = ({posts, onDelete}) => {

  const elements = posts.map((item) =>{
    const {id, ...itemProps} = item;
    return (
        <NotesItem
          key={id}
          {...itemProps}
          onDelete={() => onDelete(id)}
        />
    )
  });

  return (
    <NotesBody>
      {elements}
    </NotesBody>
  )
}

export default NotesList;