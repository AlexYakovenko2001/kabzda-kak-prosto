import {useState} from 'react';

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return (<>
            <input onChange={(e) => {
                setValue(e.currentTarget.value)
            }}/> -- {value}
    </>

    )
}