import React, {Component} from 'react';
import {StudentItem} from './studentItem';
import StudentsModal from '../../StudentsModal/StudentsModal';
import Note from '../../pages/students/Notes';

import {
  Caption,
  CoursesList,
  StudentsWrap,
  DropDown,
  Input,
  SearchBlock,
  SortBlock,
  Title
} from "../students/studentStyled";

import search from "../../../assets/media/icon/search.svg";
import arrow from "../../../assets/media/icon/arrow.svg";
import sort from "../../../assets/media/icon/sort.svg";
import close from '../../../assets/media/icon/close.svg';

export default class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
        studentModal: false,
        notes: false
    };
    //document.body.addEventListener('click', (e) => this.closeModalBody(e));
  }

// close modal
  closeModal = () => {
    this.setState(() => {
      return {
        ...this.state,
        studentModal: false,
        notes: false
      }
    });
  }
// open student modal
  openModal = () => {
    this.setState(() => {
      return {
        ...this.state,
        studentModal: true
      }
    })
  }
  // open notes section
  openNote = () => {
    this.setState(() => {
      return {
        ...this.state,
        notes: true
      }
    })
  }
  // close modal on click body
  closeModalBody = (e) => {
    const block = document.querySelector('.studentModals');
    if(block === null) {
      return
    }
    const button = document.querySelector('.more');
    const status = e.target === block || block.contains(e.target);
    const statusModal = e.target === button;

    if (!status && !statusModal) {
      this.setState(() => {
        return {
          ...this.state,
          studentModal: false
        }
      });
    }
  }
  render() {
    return (
      <StudentsWrap>
        <div className='container'>
          <Caption>
            <Title>Ученики</Title>
          </Caption>
          <Caption>
            <SearchBlock>
              <Input>
                <img src={search} alt="icon"/>
                <input type="text" placeholder="Поиск"/>
              </Input>
              <DropDown>
                <p>Курс</p>
                <img src={arrow} alt="icon"/>
              </DropDown>
            </SearchBlock>
            <SortBlock>
              <img src={sort} alt="icon"/>
              <p>Сортировать по</p>
              <p><b>алфавиту</b></p>
              <img src={arrow} alt="icon"/>
            </SortBlock>
          </Caption>
          {/*ADD students LIST*/}
          <CoursesList padding={this.state.notes}>
            <StudentItem
              activeNoteBlock={this.state.notes}
              open={this.openModal}
              note={this.openNote}
              number={3}/>
            <StudentItem
              activeNoteBlock={this.state.notes}
              open={this.openModal}
              note={this.openNote}
              number={0}/>
            <StudentItem
              activeNoteBlock={this.state.notes}
              open={this.openModal}
              note={this.openNote}
              number={18}/>

              {/*ADD NOTES BLOCK*/}
            {
              this.state.notes
              ? <Note
                  closed={this.closeModal}
                />
              : null
            }
          </CoursesList>
        </div>
        {
          this.state.studentModal
            ? <StudentsModal
              closed={this.closeModal}
              />
            : null
        }
      </StudentsWrap>
    )
  }
}
