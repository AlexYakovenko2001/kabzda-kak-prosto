import React from "react";
type AccordionTitlePropsType = {
    title: string
    onClickCallBack: () => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle is rendering');
    return(
        <h3 onClick={props.onClickCallBack}>{props.title}</h3>
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
    onClickCallBack: (value: boolean) => void
}
function Accordion(props: AccordionPropsType) {
    console.log('Accordion is rendering');
    return (<>
            <AccordionTitle title={props.title} onClickCallBack={ () => {props.onClickCallBack(!props.collapsed)} }/>
            { !props.collapsed && <AccordionBody/>}
        </>
    )
}
export default Accordion