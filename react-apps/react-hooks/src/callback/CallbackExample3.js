
import React, { useCallback, useEffect, useState } from 'react'

const CallbackExample3 = () => {
  
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

  const countHandlerCallback = useCallback(()=>{
    setCount((prevCount)=>{
      return prevCount + 1;
  })
  },[count]);
  return <>
    <button onClick={priceHandler}>Price+</button> {price}
    <br />
    <ItemMemo count={count} handler={countHandlerCallback}/>
  </>
}

export default CallbackExample3

const Item = ({count,handler})=>{
    useEffect(()=>{
        console.log('item');
    })
  return <>
    console.log( {count});
    <button onClick={handler}>Count +</button> {count}
  </>
}

const ItemMemo = React.memo(Item);