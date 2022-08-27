import React from 'react';
import './App.css';
import {TrackValueOfUncontrolledInput} from './components/UncontrolledInput/TrackValueOfUncontrolledInput/TrackValueOfUncontrolledInput';
import {
    GetValueOfUncontrolledInputByButtonPress
} from './components/UncontrolledInput/GetValueOfUncontrolledInputByButtonPress/GetValueOfUncontrolledInputByButtonPress';
import {UncontrolledInput} from './components/UncontrolledInput/UncontrolledInput';

function App() {

    return (
        <div className={'App'}>
            <UncontrolledInput/>
            <br/>
            <br/>
            <TrackValueOfUncontrolledInput/>
            <br/>
            <br/>
            <GetValueOfUncontrolledInputByButtonPress/>
        </div>);
}

export default App;