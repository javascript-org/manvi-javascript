import { useRef } from "react"

export const RefExample = ()=>{

    let inputRef =useRef();
    const handleOnChange = ()=>{
        console.log(inputRef.current.value);
    }

    return <>
      <input onChange={handleOnChange} type="text" ref= {inputRef} />
    </>
}