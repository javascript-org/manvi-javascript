

import React, { useRef } from 'react'

const UseRefExample = () => {

    let inputRef = useRef();
    const changeHandler = ()=>{
        console.log(inputRef.current.value);
    }
  return <>
    <input id="firstName" onChange={changeHandler} type="text" ref={inputRef} />
  </>
    
}

export default UseRefExample