import React, {useState} from 'react';


const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: {users: Array<string>}) => {
    console.log('render')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)


export const ReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Misha', 'Petya', 'Alexey', 'Dmitry'])
    return (
        <>
            <button onClick={()=>setCounter(counter + 1)}>+</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
        )
}