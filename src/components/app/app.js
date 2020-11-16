import React from 'react';
import { Route, Switch} from "react-router";
import Courses from "../pages/courses/courses";
import Home from '../pages/home/Home';
import Header from '../header/header';
import Schedule from "../pages/schedule/schedule";
import Students from "../pages/students/students";
import HomeWork from "../pages/homeWork/homeWork";
import Selection from "../pages/selection/selection";
import AddCourses from "../pages/addCourses/addCourses";
import SingleCourses from "../pages/singleCourses/singleCourses";

import './app.css';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/courses' exact component={Courses}/>
        <Route path='/schedule' exact component={Schedule}/>
        <Route path='/students' exact component={Students}/>
        <Route path='/homework' exact component={HomeWork}/>
        <Route path='/selection' exact component={Selection}/>
        <Route path='/addCourses' exact component={AddCourses}/>
        <Route path='/SingleCourses' exact component={SingleCourses}/>
      </Switch>
    </>
  )
}

export default App;