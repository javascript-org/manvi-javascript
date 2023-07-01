import { useState } from "react";

export const StateExample = () => {
  let count = 10;
  const increaseCount = () => {
    count = count + 1;
    console.log(count);
  };

  let [count1, setCount1] = useState(0);
  const increaseCountWithState = () => {
    setCount1((prevCount) => {
      return prevCount + 1;
    });
  };

  let [items, setItem] = useState(["a", "b"]);
  const addItem = () => {
    const itemValue = "k" + Math.random();
    setItem((prevItems) => {
      return [...prevItems, itemValue];
    });
  };

  let [person,setPerson]=useState({name:'John',age: 10})
  const increaseAge=()=>{
    setPerson((prevPerson)=>{
     return {...prevPerson, 
        age: prevPerson.age + 1
    }
    })
  }

  return (
    <>
      <h1>State Hook</h1>
      {count}
      <button onClick={increaseCount}>Increase Count</button>
      <br />
      {count1}
      <button onClick={increaseCountWithState}>
        Increase Count1 with State
      </button>
      <ul>
        {
            items.map((item, index) => {
            return <li key={index}>{item}</li>;
            })
        }
      </ul>
      <button onClick={addItem}>Add Item</button>
      {JSON.stringify(person)}
      <button onClick={increaseAge}>Increase Age</button>
      <hr />
    </>
  );
};
