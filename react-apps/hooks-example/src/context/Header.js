import { useContext } from "react";
import { AppContext } from "./ContextDef";

export const Header=(props)=>{
    const person = useContext(AppContext);
    return <>
     Welcome {person.name} & your age: {props.age}
    </>
}