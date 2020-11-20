import React, {Component} from 'react';
import InputPass from "./inputPass";
import Input from './input';
// styled
import {SignInForm, SocialBLock} from './signInStyled';

// add icon/images
import google from '../../../assets/media/icon/google.svg';
import vk from '../../../assets/media/icon/vk.svg';
import facebook from '../../../assets/media/icon/facebook.svg';

export default  class SignInTab extends Component {
constructor(props) {
  super(props);
}


  render() {
    return (
      <>
        <SignInForm>
          <Input />
          <InputPass />
          <div className={'forget'}>
            <p>Забыли пароль?</p>
            <button>Восстановить пароль</button>
          </div>
          <input className={'submit'} type='submit' value={'Войти'} />
        </SignInForm>
        <SocialBLock>
          <a><img src={google} alt="icon"/></a>
          <a><img src={vk} alt="icon"/></a>
          <a><img src={facebook} alt="icon"/></a>
        </SocialBLock>
      </>
    )
  }
}
