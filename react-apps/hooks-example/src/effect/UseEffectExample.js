import { useEffect } from "react";
import { useState } from "react";

export const UseEffectExample = () => {
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(10);

  const increaseCount = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const increaseAge = () => {
    setAge((prevAge) => {
      return prevAge + 1;
    });
  };

  useEffect(()=>{
    console.log('always exists on any state change');
  });

  useEffect(()=>{
    console.log('runs only once. not aware about any state');
  },[]);

  useEffect(()=>{
    console.log('exists when count state change');
  },[count]);

  return (
    <>
      <h1>Use Effect Example</h1>
      {count} <button onClick={increaseCount}>Increase Count</button>
      {age} <button onClick={increaseAge}>Increase Age</button>
      <hr />
    </>
  );
};
