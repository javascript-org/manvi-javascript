import { useEffect, useState } from "react"


export const UseEffectExample = ()=>{

    let [count,setCount] = useState(10);
    let [age,setAge] = useState(20);

    const increaseCount = ()=>{
        setCount((prevCount)=>{
                return prevCount + 1;
        })
    }

    const increaseAge = ()=>{
        setAge((prevAge)=>{
            return prevAge + 2;
        })
    }

    useEffect(()=>{
        console.log('use effect 1');
    });

    useEffect(()=>{
        console.log('use effect 2');
    },[]); // not aware about the state change

    useEffect(()=>{
        console.log(`use effect 3 ${age}; ${count}`);
    },[count]);
    return <>
     <h1>Use Effect</h1>

        <button onClick={increaseCount}>Count +</button> {count}
        <button onClick={increaseAge}>Age +</button> {age}
     <hr />
    </>
}