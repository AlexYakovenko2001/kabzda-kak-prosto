import React, {useState} from 'react';
import './App.css';
import {Select} from './components/Select/Select';

function App() {
    const [value, setValue] = useState('1')
    return (
        <div className={'App'}>
            <Select value={value} onChange={setValue} items={[{value: '1', title: 'Minsk'}, {value: '2', title: 'Kiev'}, {value: '3', title: 'Moscow'}]} />
        </div>);
}

export default App;