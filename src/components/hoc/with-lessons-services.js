import React from 'react';
import { LessonsServicesConsumer } from '../lessons-services-context';

const withLessonsServices = () => (Wrapped) => {
  return (props) => {
    return (
      <LessonsServicesConsumer>
        {
          (lessonsServices) => {
            return (
            <Wrapped {...props} lessonsServices={lessonsServices}/>
            );
          }
        }
      </LessonsServicesConsumer>
    );
  }
}
export default withLessonsServices;