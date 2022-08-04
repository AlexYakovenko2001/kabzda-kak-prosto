import React, {useState} from 'react';

type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle is rendering');
    return(
        <h3>{props.title}</h3>
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
function    UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion is rendering');
 const [collapsed, setCollapsed] = useState(true)
    return (<>
            <AccordionTitle title={props.title}/>
            <button onClick={ ()=>{setCollapsed(!collapsed);} }>TOGGLE</button>
            { !collapsed && <AccordionBody/>}
        </>
    )
}
export default UncontrolledAccordion