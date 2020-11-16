import React, {Component} from "react";
import Common from "./CommonTabs";
import MyTemplates from "./MyTabs";

import {TabsHead, TabsHeadNav} from "./addCoursesStyle";

class CourseTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabStatus: 'common'
    }
  }

// change active tab
  changeTab = (e, tab) => {
    this.setState({tabStatus: tab});
    document.querySelector('.tabs-active').classList.remove('tabs-active');
    e.target.classList.add('tabs-active');
  };

  render() {
    return (
      <>
        <TabsHead>
          <TabsHeadNav className='tabs-active' onClick={(e) => this.changeTab(e, 'common')}>Общее шаблоны</TabsHeadNav>
          <TabsHeadNav onClick={(e) => this.changeTab(e, 'tech')}>Мои шаблоны</TabsHeadNav>
        </TabsHead>
        {
          this.state.tabStatus === 'common'
            ? <Common/>
            : <MyTemplates />
        }
      </>
    )
  }
}

export default CourseTabs;