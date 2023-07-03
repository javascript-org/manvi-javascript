import { useContext } from "react";
import { AppContext } from "./ContextDef";
import { Course } from "./Course";

export const Student = () => {
let appContext = useContext(AppContext);
  let student = {
    ...appContext,
    rollNum: 100,
    courses: ["Math", "Physics"],
  };

  return (
    <>
    <AppContext.Provider value={student}>
      <h1>Student</h1>
      <Course />
    </AppContext.Provider>
    </>
  );
};
