import React from 'react';
import './App.css';
import {ControlledInput} from './components/input/ControlledInput/ControlledInput';
import {ControlledCheckbox} from './components/input/ControlledCheckbox/ControlledCheckbox';
import {ControlledSelect} from './components/input/ControlledSelect/ControlledSelect';

function App() {

    return (
        <div className={'App'}>
            <ControlledInput/>
            <br/>
            <br/>
            <ControlledCheckbox/>
            <br/>
            <br/>
            <ControlledSelect/>
        </div>);
}

export default App;