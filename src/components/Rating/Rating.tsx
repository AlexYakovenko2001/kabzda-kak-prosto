import React from "react";
import {carryValue} from "@testing-library/user-event/dist/keyboard/shared";

type StarPropsType = {
    selected: boolean
}


function Star(props: StarPropsType) {
    console.log('Star rendering')
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }
}
type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {
    console.log('List is rendering');

    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )
}