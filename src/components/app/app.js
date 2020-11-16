import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from "../header/header";
import Courses from "../pages/courses/courses";
import Schedule from '../pages/schedule';


import './app.css';

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Route path="/schedule" component={Schedule} />
        <Route path="/courses" component={Courses} />
        {/* <Courses/> */}
      </Router>
    </>
  )
}

export default App;