import React, {Component} from 'react';
import {PlanList} from "./PlanList";
import AddStudentModal from '../../addStudentModal/addStudentModal';
import CalendarModal from "../../calendarModal/CalendarModal";
import ActiveSidebar from '../courseEmpty/activeSidebar';
// styled
import {
  CourseEmptyWrap,
  LeftAside,
  RightAsideWrap,
  MainContent,
  Plans,
  InfoList } from './courseEmptyStyled';

export  default  class CourseEmpty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { number : 1 ,title: 'Lorem ipsum dolor sit amet' , desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis porta urna, eget'},
        { number : 2 ,title: 'Aenean placerat nisi ut lacus faucibus' , desc: 'Aenean quis porta urna, eget euismod massa. Aliquam erat volutpat. Quisque non'},
        { number : 3 ,title: 'Vestibulum ut orci iaculis' , desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis porta urna, eget'},
        { number : 4 ,title: 'Ut sit amet ultrices tortor' , desc: 'Aenean quis porta urna, eget euismod massa. Aliquam erat volutpat. Quisque non'},
        { number : 5 ,title: 'Lorem ipsum dolor sit amet' , desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis porta urna, eget'},
        { number : 6 ,title: 'Aenean placerat nisi ut lacus faucibus' , desc: 'Aenean quis porta urna, eget euismod massa. Aliquam erat volutpat. Quisque non'},
        { number : 7 ,title: 'Ut sit amet ultrices tortor' , desc: 'Aenean quis porta urna, eget euismod massa. Aliquam erat volutpat. Quisque non'},
        { number : 8 ,title: 'Lorem ipsum dolor sit amet' , desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis porta urna, eget'},
        { number : 9 ,title: 'Aenean placerat nisi ut lacus faucibus' , desc: 'Aenean quis porta urna, eget euismod massa. Aliquam erat volutpat. Quisque non'}
      ],
      invite: false,
      calendar: false,
      step: true,
      stepTwo: false,
      stepThree: false,
      finish: false,
      activeSidebar: false
    };
      document.body.addEventListener('click', (e) => this.closeModalBody(e));
  }
// close ALl modal
  closeModal = () => {
    this.setState(() => {
      return {
        ...this.state,
        invite: false,
        calendar: false
      }
    });
  }
// close modal on click body
  closeModalBody = (e) => {
    const block = document.querySelector('.studentModal');
    if(block === null) {
      return
    }
    const button = document.querySelector('.showModal');
    const status = e.target === block || block.contains(e.target);
    const statusModal = e.target === button;

    if (!status && !statusModal) {
      this.setState(() => {
        return {
          ...this.state,
          invite: false,
          calendar: false
        }
      });
    }
  }
// open add student modal
  openInvite = () => {
    this.setState(() => {
      return {
        ...this.state,
        invite: true
      }
    })
  }
// next step in sidebar
  nextStep = () => {
    this.setState(() => {
      return {
        ...this.state,
        invite: false,
        step: false,
        stepTwo: true
      }
    })
  }
  finish = () => {
    this.setState(() => {
      return {
        ...this.state,
        finish: true,
        calendar: false,
        stepThree: true,
        stepTwo: false
      }
    })
  }
// open calendar modal
  openCalendar = () => {
    this.setState(() => {
      return {
        ...this.state,
        calendar: true
      }
    })
  }
//open active course sidebar
  openActiveSidebar = () => {
    this.setState(() => {
      return {
        ...this.state,
        activeSidebar: true,
        stepThree: false
      }
    })
  }

  render() {
    const {data} = this.state;
    return (
      <div className='container'>
        <CourseEmptyWrap>
          <LeftAside>
            <div className="title">Информация</div>
            <InfoList>
              <div className='infoItem'>
                <p className='name'>Длительность курса</p>
                <p className='desc'>10 уроков</p>
              </div>
              <div className='infoItem'>
                <p className='name'>Длительность курса</p>
                <p className='desc'>60 минут</p>
              </div>
              <div className='infoItem'>
                <p className='name'>Уровень</p>
                <p className='desc'>A1</p>
              </div>
              <div className='infoItem'>
                <p className='name'>Сложность</p>
                <div className="dificulty">
                  <div className="dificulty-item active"></div>
                  <div className="dificulty-item active"></div>
                  <div className="dificulty-item active"></div>
                  <div className="dificulty-item active"></div>
                  <div className="dificulty-item active"></div>
                  <div className="dificulty-item active"></div>
                  <div className="dificulty-item"></div>
                </div>
              </div>
            </InfoList>
          </LeftAside>
          <MainContent>
            <div className='title'>План занятий</div>
            <Plans>
               {/*add plans of lesson*/}
              <PlanList plans={data}/>
            </Plans>
          </MainContent>

           {/*SIDEBAR STEP 1/3*/}
          {
            this.state.step
              ?  <RightAsideWrap>
                    <div className={'icons'}><p>👩</p></div>
                    <div className="stepBlock">
                       <div className={'step'}>1</div>
                        <div className={'split'}>/</div>
                        <div className={'step'}>3</div>
                    </div>
                    <div className="title">Пригласите ученика</div>
                     <button
                       onClick={() => this.openInvite()}
                       className={'showModal'} >
                       Добавить ученика
                     </button>
                  </RightAsideWrap>
              : null
          }
          {/*SIDEBAR STEP 2/3*/}
          {
            this.state.stepTwo
              ? <RightAsideWrap>
                <div className={'icons'}><p>🗓️</p></div>
                <div className="stepBlock">
                  <div className={'step'}>2</div>
                  <div className={'split'}>/</div>
                  <div className={'step'}>3</div>
                </div>
                <div className="title">Пригласите ученика</div>
                <button
                  onClick={() => this.openCalendar()}
                  className={'showModal'} >
                  Открыть расписание
                </button>
              </RightAsideWrap>
              : null
          }
          {/*SIDEBAR STEP 3/3*/}
          {
            this.state.stepThree
              ? <RightAsideWrap>
                <div className={'icons'}><p>🏁</p></div>
                <div className="stepBlock">
                  <div className={'step'}>3</div>
                  <div className={'split'}>/</div>
                  <div className={'step'}>3</div>
                </div>
                <div className="title">Активируйте курс</div>
                <button
                  onClick={(e)=> this.openActiveSidebar()}
                  className={'showModal'} >
                  Активировать курс
                </button>
              </RightAsideWrap>
              : null
          }
          {/*SIDEBAR ACTIVE COURSE*/}
          {
            this.state.activeSidebar
            ? <ActiveSidebar/>
            : null
          }
        </CourseEmptyWrap>
         {/*MODAL ADD STUDENTS*/}
        {
          this.state.invite
          ? <AddStudentModal
              close={this.closeModal}
              step={this.nextStep}
            />
          : null
        }
        {/*add modal calendar*/}
        {
          this.state.calendar
            ? <CalendarModal
              close={this.closeModal}
              finish={this.finish}
            />
            : null
        }
      </div>
    )
  }
}