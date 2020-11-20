import React, {Component} from 'react';
import SignInTab from "./signInTab";
import RegisterTab from "./RegisterTab";

// styled
import {WithOutHeaderContainer, SignInModal, SignInModalWrapp,TabsBody, TabsHead, TabsHeadNav} from './signInStyled';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabStatus: 'signIn'
    }
  }

  // change active tab
  changeTab = (e, tab) => {
    this.setState({tabStatus: tab});
    document.querySelector('.tabs-active').classList.remove('tabs-active');
    e.target.classList.add('tabs-active');
  };

 render(){
   return (
     <WithOutHeaderContainer>
       <div className={'container'}>
         <SignInModalWrapp>
           <SignInModal>
             <h3>Logo</h3>
             <h4>Привет 👋</h4>
             <TabsHead>
               <TabsHeadNav className='tabs-active' onClick={(e) => this.changeTab(e, 'signIn')}>Войти</TabsHeadNav>
               <TabsHeadNav onClick={(e) => this.changeTab(e, 'registration')}>Зарегистрироваться</TabsHeadNav>
             </TabsHead>
             <TabsBody>
               {
                 this.state.tabStatus === 'signIn'
                   ? <SignInTab/>
                   : <RegisterTab/>
               }
             </TabsBody>
           </SignInModal>
         </SignInModalWrapp>
       </div>
     </WithOutHeaderContainer>
   )
 }
}

