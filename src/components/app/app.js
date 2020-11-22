import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from "../header/header";
import Homework from '../pages/homework';
import Courses from "../pages/courses/courses";
import Schedule from '../pages/schedule';
import UseFull from '../pages/use-full';


import './app.css';

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Route path="/schedule" component={Schedule} />
        <Route path="/homework" component={Homework} />
        <Route path="/courses" component={Courses} />
        <Route path="/usefull" component={UseFull} />
        {/* <Courses/> */}
      </Router>
    </>
  )
}

export default App;