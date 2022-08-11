import React from 'react';

type OnOffPropsType = {
    isOn: boolean
    onClickCallBack: (value: boolean) => void
}
export const OnOff: React.FC<OnOffPropsType> = (props) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '5px',
        display: 'inline-block',
        backgroundColor: props.isOn ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '5px',
        display: 'inline-block',
        marginLeft: '2px',
        backgroundColor: props.isOn ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.isOn ? 'green' : 'red'

    }
    return (
        <div>
            <div style={onStyle} onClick={ () => {props.onClickCallBack(true)} }>On</div>
            <div style={offStyle} onClick={ () => {props.onClickCallBack(false)} }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}