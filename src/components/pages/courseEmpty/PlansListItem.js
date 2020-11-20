import {PlanListItemWrap} from "./courseEmptyStyled";
import React, {Component} from "react";

export default  class PlansListItem extends Component{
  render(){
    const{title, desc, number} = this.props;
    return(
      <PlanListItemWrap>
        <div className='top'>
          <div className="number">#{number}</div>
          <div className="name">{title}</div>
        </div>
        <div className='bottom'>{desc}</div>
      </PlanListItemWrap>
    )
  }
}
