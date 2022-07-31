import React from "react";
type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle is rendering');
    return(
        <h3>{props.title}</h3>
    )
}
type AccordionBodyPropsType = {

}
function AccordionBody(props: AccordionBodyPropsType) {
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
    title: string,
    collapsed: boolean
}
function Accordion(props: AccordionPropsType) {
    console.log('Accordion is rendering');
    return (<>
            <AccordionTitle title={props.title}/>
            { !props.collapsed && <AccordionBody/>}
        </>
    )
}
export default Accordion