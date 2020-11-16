import React from 'react';
import TemplateItem from "./TemplateItem";
// styled
import {CommonWrap} from './addCoursesStyle';

const CommonTabs = () => {
  return (
    <CommonWrap>
      <TemplateItem/>
      <TemplateItem/>
      <TemplateItem/>
      <TemplateItem/>
      <TemplateItem/>
      <TemplateItem/>
    </CommonWrap>
  )
}

export default CommonTabs;