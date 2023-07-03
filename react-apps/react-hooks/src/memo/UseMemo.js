import { useMemo, useState } from "react";

export const UseMemo = () => {

  let [count, setCount] = useState(2);
  let [age, setAge] = useState(3);

  const countHandler = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const ageHandler = () => {
    setAge((prevAge) => {
      return prevAge + 1;
    });
  };

  const powerFunction = ()=>{
    return Math.pow(count,2)+"::"+Math.random();
  }
  const powerResult = powerFunction();

  const powerResultMemo = useMemo(()=>{
    return powerFunction()
  },[count]);

  // explore other 2 variants

  return (
    <>
      <h1>Use Memo: {powerResult} </h1>
      <h1>Use Memo1: {powerResultMemo} </h1>
      <button onClick={countHandler}>Count+</button>
      {count}
      <button onClick={ageHandler}>Age+</button>
      {age}
    </>
  );
};
