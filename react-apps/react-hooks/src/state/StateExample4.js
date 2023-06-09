import React, { useEffect, useState } from "react";

const StateExample4 = () => {
  let [items, setItem] = useState(["a", "b"]);
  const addItem = () => {
    const item = "k" + ":" + Math.random();
    setItem((prevItems) => {
      return [...prevItems, item];
    });
  };
  return <>
     <span>StateExample 4</span>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <button onClick={addItem}>Add Item</button>
      <hr />
    </>
};
export default StateExample4;
