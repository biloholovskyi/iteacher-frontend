import React, {Component} from 'react';
import NotesItem from "./NotesItem";
import NotesForm from "./NotesForm";
import NotesList from "./NotesList";
//images / icon
import close from "../../../assets/media/icon/close.svg";
// styled
import {NotesWrap,Notes, NotesBody} from "./studentStyled";

export default class Note extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {label : 'test' , id: 1},
        {label : 'test lorem lorem lorem' , id: 2}
      ]
    }
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(body) {
    const newItem ={
      label: body
    }
    this.setState(({data})=>{
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }
  deleteItem(id) {
    this.setState(({data}) => {
        const index = data.findIndex(elem => elem.id === id);

        const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

        return {
          data: newArr
        }
    });
  }

  render() {
    const {closed} = this.props;

    return (
      <NotesWrap>
        <Notes>
          <div className="notesHeader">
            <h3>Заметки</h3>
            <img onClick={(e) => {closed(e)}} src={close} alt="icon"/>
          </div>
          <NotesList
            posts={this.state.data}
            onDelete={this.deleteItem}
          />
          <NotesForm
            onAdd={this.addItem}
          />
        </Notes>
      </NotesWrap>
    )
  }
}
