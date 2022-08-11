import React, {useState} from 'react';

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle is rendering');
    return(
        <h3 onClick={ () => props.setCollapsed(!props.collapsed) }>{props.title}</h3>
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
            <AccordionTitle title={props.title} setCollapsed={setCollapsed} collapsed={collapsed}/>
            { !collapsed && <AccordionBody/>}
        </>
    )
}
export default UncontrolledAccordion