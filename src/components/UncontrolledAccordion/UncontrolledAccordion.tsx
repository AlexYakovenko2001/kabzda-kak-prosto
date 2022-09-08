import React, {useReducer} from 'react';
import {ActionType, reducer, StateType} from './reducer';


type AccordionTitlePropsType = {
    title: string
    collapsed: StateType
    dispatch: (collapsed: ActionType) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle is rendering');
    return (
        <h3 onClick={() => props.dispatch({type: 'TOGGLE-COLLAPSED'})}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody is rendering');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>

        </ul>
    )
}

type AccordionPropsType = {
    title: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion is rendering');
    const [state, dispatch] = useReducer(reducer ,{ collapsed: false })
    return (<>
            <AccordionTitle title={props.title} dispatch={dispatch} collapsed={state}/>
            {!state.collapsed && <AccordionBody/>}
        </>
    )
}

export default UncontrolledAccordion