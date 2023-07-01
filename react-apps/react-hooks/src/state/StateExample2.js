import { useState } from "react";


export const StateExample2 = ()=>{

    let [count,setCount] = useState(10);
    
    const countHandler = ()=>{
       setCount((prevState)=>{
        return prevState + 1;
       });
    }
    return <>
      <h1>State Example 2</h1>
      
      <button onClick={countHandler}>Increase Count</button>{count}
      <hr />
    </>
}