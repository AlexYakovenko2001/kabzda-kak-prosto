import {ChangeEvent, useState} from 'react';

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onInputChangeHandler}/>
}