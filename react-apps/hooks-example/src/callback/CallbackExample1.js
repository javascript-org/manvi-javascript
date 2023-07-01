import React, { memo, useEffect } from "react";
import { useState } from "react"


export const CallbackExample1 = ()=>{

    let [itemCount,setItemCount] = useState(1);
    let [price,setPrice] = useState(100);

    const increasePrice = ()=>{
        setPrice((prevPrice)=>{
            return prevPrice + 1;
        })
    }

    const increaseItemCount = ()=>{
        setItemCount((prevCount)=>{return prevCount + 1});
    }


    return <>
    <h1>Callback Example 1</h1>
    <h1>{price}</h1>
    <button onClick={increasePrice}>Item Price Increment</button>
    <ItemMemo count={itemCount} increment={increaseItemCount}/>
    <hr />
    </>
}

const Item=({count, increment})=>{
    return <>
     {console.log('item')}
     <h1>Item: {count}</h1>
     <button onClick={increment}>Item Increment</button>
    </>
}

const ItemMemo = React.memo(Item);