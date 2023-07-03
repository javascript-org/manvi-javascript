import { useContext } from "react"
import { AppContext } from "./ContextDef"


export const Course=()=>{
    const appContext = useContext(AppContext);
    const courseList = appContext.courses;
    return <>
    <h1>Course</h1>
    {JSON.stringify(appContext)}
    </>
}