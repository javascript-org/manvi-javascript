import { useState } from "react";


export const StateExample2 = ()=>{
    // array destructuring
    let [count,setCount] = useState(10); // initialize count with 10

    const countHandler = ()=>{
       setCount((prevState)=>{ // setCount as a higher order function
        return prevState + 1;
       });
    }
    return <>
      <h1>State Example 2</h1>
      <button onClick={countHandler}>Increase Count</button>{count}
      <hr />
    </>
}