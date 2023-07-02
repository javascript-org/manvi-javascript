import { useMemo } from "react";
import { useState } from "react";

export const MemoExample = ()=>{

    const [count, setCount] = useState(0);

    const sqrFunction = ()=>{
        console.log('on each render it will be called');
        return Math.pow(count,3)+":::";
    }
    const sqrValue = sqrFunction() + Math.random(); // invocation

    const memoSqrValue1 = useMemo(()=>{
        console.log('memo sqr value. runs on any state change');
        return sqrFunction() + Math.random();
    })

    const memoSqrValue2 = useMemo(()=>{
        console.log('memo sqr value. runs once dont aware about any state');
        return sqrFunction() + Math.random();
    },[])

    const memoSqrValue3 = useMemo(()=>{
        console.log('memo sqr value. runs when count state change');
        return sqrFunction() + Math.random();
    },[count])

    const increaseCount = ()=>{
        setCount((prevCount)=>{
            return prevCount + 1;
        })
    }

    return <>
    <h1>Memo Example</h1>
    Square Value: {sqrValue} <br />
    Memo Value1: {memoSqrValue1} <br />
    Memo Value2: {memoSqrValue2} <br />
    Memo Value3: {memoSqrValue3} <br />
    Count value: {count} <br />
    <button onClick={increaseCount}>Increase Count</button>
    <hr />
    </>
}