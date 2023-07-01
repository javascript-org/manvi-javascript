import { CallbackExample } from "./callback/CallbackExample"
import { CallbackExample1 } from "./callback/CallbackExample1"
import { CallbackExample2 } from "./callback/CallbackExample2"
import { ContextExample } from "./context/ContextExample"
import { UseEffectExample } from "./effect/UseEffectExample"
import { MemoExample } from "./memo/MemoExample"
import { RefExample } from "./ref/RefExample"
import { StateExample } from "./state/StateExample"
import { StateExample1 } from "./state/StateExample1"


export const Root = ()=>{
  return <>
   <h1>React App</h1>
   <StateExample1/>
   <StateExample/>
   <UseEffectExample/>
   <ContextExample/>
   <MemoExample/>
   <CallbackExample/>
   <CallbackExample1/>
   <CallbackExample2/>
   <RefExample/>
  </>
}