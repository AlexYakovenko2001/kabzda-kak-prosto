import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import Accordion from './components/Accordion/Accordion';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';

function App() {
    console.log('App is rendering')
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [on, setOn] = useState(false)
    const [accordionValue, setAccordionValue] = useState(true)
  return (
   <div className={'App'}>
         <Rating value={ratingValue} setRatingValue={setRatingValue} />
       <br/>
       <OnOff isOn={on} onClickCallBack={setOn}/>
       <br/>
       <Accordion title={'users'} collapsed={accordionValue} onClickCallBack={setAccordionValue}/>
       <br/>
       <UncontrolledOnOff onChange={setOn}/> {on.toString()}
   </div>);
}

export default App;