import { memo, useState } from "react"
import { Cpu } from "./Cpu";


export const Laptop = ()=>{
    let [count,setCount] = useState(1);
    const increaseCount = ()=>{
        setCount((prevCount)=>{
            return prevCount + 1;
        });
    }
    return <>
    <button onClick={increaseCount}> Count +</button>{count}
    <CpuMemoized/>
    </>
}

const CpuMemoized = memo(Cpu);