import { memo } from "react";
import { useState } from "react";
import { useEffect } from "react";


export const StateExample1=()=>{
    let [count,setCount] = useState(0);
    const increaseCount = ()=>{
        setCount((prevCount)=>{return prevCount + 1});
    }
    return <>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Count+</button>
      <Home/>
      <MemoHome/>
    </>
}

const Home=()=>{
    useEffect(()=>{
        console.log('child component');
    })

    return <>
    <h1>Home page</h1>
    </>
}
const MemoHome = memo(Home);
