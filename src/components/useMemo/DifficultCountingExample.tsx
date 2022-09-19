import {useMemo, useState} from 'react';

export const UseMemoExample = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA
    let resultB = 1

    resultA = useMemo(()=>{
        let tempResult = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResult *= i
        }
        return tempResult
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }
    return <>
        <input value={a} onChange={(e) => {setA(Number(e.currentTarget.value))}}/>
        <input value={b} onChange={(e) => {setB(Number(e.currentTarget.value))}}/>
        <hr/>
        <div>
            Result for A: {resultA}
        </div>
        <div>
            Result for B: {resultB}
        </div>
    </>
}