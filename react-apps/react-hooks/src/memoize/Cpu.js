import { useState } from "react"


export const Cpu=({count})=>{
    let [core,setCore]=useState(2);

    const increaseCore=()=>{
        setCore((prevCore)=>{
            return prevCore + count;
        })
    }
    return <>
    {console.log('cpu')}
    <h1>CPU: {core}</h1>
    <button onClick={increaseCore}>Core +</button>
    </>
}