import CallbackExample1 from "./callback/CallbackExample1"
import CallbackExample2 from "./callback/CallbackExample2"
import CallbackExample3 from "./callback/CallbackExample3"
import { Student } from "./context/Student"
import { UseEffectExample } from "./effect/UseEffectExample"
import { UseMemo } from "./memo/UseMemo"
import { Laptop } from "./memoize/Laptop"
import { Header } from "./props/Header"
import  UseRefExample  from "./ref/UseRef"
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
     {/* <UseMemo/> */}
     {/* <CallbackExample1/> */}
     {/* <CallbackExample2/> */}
     {/* <CallbackExample3/> */}
     <UseRefExample/>
    </div>
}