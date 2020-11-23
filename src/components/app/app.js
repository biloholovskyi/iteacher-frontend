import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from "../header/header";
import Homework from '../pages/homework';
import Courses from "../pages/courses/courses";
import Schedule from '../pages/schedule';
import UseFull from '../pages/use-full';


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
import CourseEmpty from "../pages/courseEmpty/courseEmpty";
import SignIn from "../pages/signIn/signIn";
import NoneCourse from '../pages/noneCourses/noneCourses';
// general style
import './app.css';

const App = () => {
  return (
    <>
//       <Router>
//         <Header/>
//         <Route path="/schedule" component={Schedule} />
//         <Route path="/homework" component={Homework} />
//         <Route path="/courses" component={Courses} />
//         <Route path="/usefull" component={UseFull} />
//         {/* <Courses/> */}
//       </Router>
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
        <Route path='/courseEmpty' exact component={CourseEmpty}/>
        <Route path='/SignIn' exact component={SignIn}/>
        <Route path='/NoneCourse' exact component={NoneCourse}/>
      </Switch>
    </>
  )
}

export default App;