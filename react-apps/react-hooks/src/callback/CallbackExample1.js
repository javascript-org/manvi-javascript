
import React, { useEffect, useState } from 'react'

const CallbackExample1 = () => {
  
  let [price,setPrice] = useState(10);
  let [count,setCount] = useState(100);  
  
  const priceHandler = ()=>{
    setPrice((prevPrice)=>{return prevPrice + 1});
  }

  const countHandler = ()=>{
    setCount((prevCount)=>{
        return prevCount + 1;
    })
  }
  return <>
    <button onClick={priceHandler}>Price+</button> {price}
    <br />
    <Item count={count} handler={countHandler}/>
  </>
}

export default CallbackExample1

const Item = ({count,handler})=>{
    useEffect(()=>{
        console.log('item');
    })
  return <>
    console.log( {count});
    <button onClick={handler}>Count +</button> {count}
  </>
}