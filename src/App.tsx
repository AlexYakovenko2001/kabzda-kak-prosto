import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';

function App() {
    const [collapsed, setCollapsed] = useState(true)
    const onClick = (value: any) => {
        console.log(`item ${value} was clicked`)
    }
    return (
        <div className={'App'}>
        <Accordion title={'Users'} collapsed={collapsed} onClickCallBack={setCollapsed} items={[{title:'Alexander', value: 1}, {title:'Viktor', value: 2}, {title:'Alexey', value: 3}, {title:'Anatoliy', value: 4}]} onClick={onClick}/>
        </div>);
}

export default App;