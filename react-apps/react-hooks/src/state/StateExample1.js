

export const StateExample1 = ()=>{
  // not using state. 
  // so even though count increase with each click, no re-rendering will happen.
    let count = 0;
    const countHandler = ()=>{
        count = count +1;
        console.log(count); // increment of count wont be visible.
    }
    return <>
      <h1>State Example 1</h1>
      <button onClick={countHandler}>Increase Count</button>{count}
      <hr />
    </>
}