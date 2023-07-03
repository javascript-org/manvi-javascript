import { Student } from "./context/Student"
import { UseEffectExample } from "./effect/UseEffectExample"
import { UseMemo } from "./memo/UseMemo"
import { Laptop } from "./memoize/Laptop"
import { Header } from "./props/Header"
import { StateExample1 } from "./state/StateExample1"
import { StateExample2 } from "./state/StateExample2"
import StateExample3 from "./state/StateExample3"
import StateExample4 from "./state/StateExample4"


export const Root = ()=>{

    return <div>
     <h1>Root Component</h1>
     {/* <StateExample1/>
     <StateExample2/>
     <StateExample3/>
     <StateExample4/> */}
     {/* <UseEffectExample/> */}
     {/* <Header/> */}
     {/* <Student/> */}
     {/* <Laptop/> */}
     <UseMemo/>
    </div>
}