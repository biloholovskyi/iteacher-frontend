import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import App from './components/app/app';
import ErrorBoundry from "./components/errorBoundry/errorBoundry";
import store from './store';
import LessonsServices from './services/lessons-services';
import { LessonsServicesProvider } from './components/lessons-services-context';

const lessonsServices = new LessonsServices();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <LessonsServicesProvider value={lessonsServices}>
        <Router>
          <App/>
        </Router>
      </LessonsServicesProvider>
    </ErrorBoundry>
  </Provider>, document.getElementById('root')
);