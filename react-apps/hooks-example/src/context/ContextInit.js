import { AppContext } from "./ContextDef";
import { Header } from "./Header";


export const Page = ()=>{

    let person= {name: 'John Doe', age: 10};

    return <>
      <AppContext.Provider value={person}>
        <Header age={person.age}/>
      </AppContext.Provider>  
    </>
}

