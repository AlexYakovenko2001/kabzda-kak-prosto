import {useRef, useState} from 'react';


export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const newInputValue = inputRef.current as HTMLInputElement
        setValue(newInputValue.value)

    }
    return (<>
            <input ref={inputRef}/>
            <button onClick={save}>save</button>- actual value: {value}
        </>

    )
}