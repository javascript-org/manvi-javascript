import { HomePage } from "./HomePage"


export const Header = ()=>{

    const handler = (x)=>{
        console.log(x);
    }
    return <>
      <h1>Header</h1>
      <HomePage title='Hello World' click={handler}/>
    </>
}