import React from 'react';

type AccordionTitlePropsType = {
    title: string
    onClickCallBack: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle is rendering');
    return (
        <h3 onClick={props.onClickCallBack}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody is rendering');
    return <ul>
        {props.items.map((i, index) => <li onClick={() => props.onClick(i.value)} key={index}>{i.title}</li>)}
    </ul>

}
type ItemType = {
    title: string
    value: any
}
type AccordionPropsType = {
    title: string,
    collapsed: boolean
    onClickCallBack: (value: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion is rendering');
    return (<>
            <AccordionTitle title={props.title} onClickCallBack={() => {
                props.onClickCallBack(!props.collapsed)
            }}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </>
    )
}

export default Accordion