import React, {useMemo, useState} from 'react';

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('users secret')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)


export const HelpForReactMemo = () => {
    console.log('example')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Misha', 'Petya', 'Alexey', 'Dmitry'])

    const newArray = useMemo(()=>{
        return users.filter(el => el.toLowerCase().indexOf('a') > -1)
    }, [users])
    return (
        <>
            <button onClick={()=>setCounter(counter + 1)}>+</button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}