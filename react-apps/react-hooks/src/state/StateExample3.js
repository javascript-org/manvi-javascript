import { useState } from "react";

const StateExample3 = () => {
  let [person, setPerson] = useState({ name: "John", age: 20 });

  const increaseAge = () => {
    setPerson((prevPerson) => {
      return { ...prevPerson, age: prevPerson.age + 1 };
    });
  };

  return (
    <>
      <h1>State Example 3: Objects</h1>
      {JSON.stringify(person)}
      <div>{person.age}</div>
      <button onClick={increaseAge}>Increase Age</button>
      <hr />
    </>
  );
};

export default StateExample3;
