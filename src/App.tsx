import React from 'react';
import './App.css';
import {OnOff} from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function App() {
    console.log('App is rendering')
  return (
   <>
      <UncontrolledAccordion title={'users'} />

       <OnOff />
       <OnOff />

       <UncontrolledRating />
   </>);
}

export default App;