import React, {Component} from "react";
import Moment from "react-moment";
import moment from 'moment'

import {NotesItemWrap, Data, Message} from "./studentStyled";

export default class NotesItem  extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentTime: moment().format('dddd, h:mm')
    };
  }
  componentDidMount() {
    this.intervalIdx = (() => this.setState ({
      currentTime: moment().format().locale()
    }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalIdx);
  }

  render() {
    const { currentTime } = this.state;
    const {label, onDelete} = this.props;
    return(
      <NotesItemWrap>
        {/*<Moment format="dddd HH:mm"/>*/}
        <Data>{ currentTime }</Data>
        <Message>
          <div className="text">{label}</div>
          <button
            onClick={onDelete}
          >Удалить</button>
        </Message>
      </NotesItemWrap>
    )
  }
}