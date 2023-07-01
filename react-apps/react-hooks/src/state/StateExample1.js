

export const StateExample1 = ()=>{

    let count = 0;
    const countHandler = ()=>{
        count = count +1;
        console.log(count);
    }
    return <>
      <h1>State Example 1</h1>
      
      <button onClick={countHandler}>Increase Count</button>{count}
      <hr />
    </>
}