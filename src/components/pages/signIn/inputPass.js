import React, {Component} from 'react';
import {Inputs} from "./signInStyled";


export default class InputPass extends Component {
  constructor(props) {
    super(props);
    this.state={
      passActive: false
    }
  }

  //add  active input
  changePass = (e) => {
    const value = e.target.value;
    this.setState({passActive: true});
    if(value === '' ) {
      document.querySelector('.labelPass').classList.remove('active');
    } else {
      document.querySelector('.labelPass').classList.add('active');
    }
  };

  render() {
    return (
      <Inputs>
        <label className={'labelPass'} >Пароль</label>
        <input className={'input'}  type="text"  onChange={(e) => this.changePass(e)}/>
      </Inputs>
    )
  }
}
