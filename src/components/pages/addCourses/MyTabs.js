import React from 'react';
import TemplateItem from "./TemplateItem";
// styled
import {CommonWrap} from "./addCoursesStyle";

const MyTemplates = () => {
  return (
    <CommonWrap>
      <TemplateItem/>
      <TemplateItem/>
    </CommonWrap>
  )
}

export default MyTemplates;