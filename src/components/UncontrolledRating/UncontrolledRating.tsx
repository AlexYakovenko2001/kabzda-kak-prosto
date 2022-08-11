import React, {useState} from 'react';

type StarType = {
    selected: boolean
    setSelected: () => void
}


function Star(props: StarType) {
    console.log('Star rendering')
    return <span onClick={ () => props.setSelected() }>
        {props.selected ? <b>star </b> : 'star '}
    </span>
}


export function UncontrolledRating() {
    console.log('List is rendering');
    const [selected, setSelected] = useState(2)


    return (
        <div>
            <Star selected={selected > 0} setSelected={() => setSelected(1)}/>
            <Star selected={selected > 1} setSelected={() => setSelected(2)}/>
            <Star selected={selected > 2} setSelected={() => setSelected(3)}/>
            <Star selected={selected > 3} setSelected={() => setSelected(4)}/>
            <Star selected={selected > 4} setSelected={() => setSelected(5)}/>
        </div>
    )
}