import React, {Component} from 'react';
import {Inputs} from "./signInStyled";


export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state={
      inputActive: false
    }
  }

  //add  active input
  changeInput = (e) => {
    const value = e.target.value;
    this.setState({inputActive: true});
    if(value === '' ) {
      document.querySelector('.label').classList.remove('active');
    } else {
      document.querySelector('.label').classList.add('active');
    }
  };

  render() {
    return (
      <Inputs>
        <label className={'label'} >Номер телефона или Email</label>
        <input className={'input'}  type="text"  onChange={(e) => this.changeInput(e)}/>
      </Inputs>
    )
  }
}
