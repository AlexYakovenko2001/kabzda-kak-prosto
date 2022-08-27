import {ChangeEvent, useState} from 'react';

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onSelectChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
return <select value={parentValue} onChange={onSelectChangeHandler}>
    <option>none</option>
    <option value={'1'}>Minsk</option>
    <option value={'2'}>Kiev</option>
    <option value={'3'}>Moscow</option>
</select>
}