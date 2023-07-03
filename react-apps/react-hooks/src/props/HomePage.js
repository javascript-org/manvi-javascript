import { Section } from "./Section"

export const HomePage = ({title,click})=>{

    const handleClick= ()=>{
        click(10);
    }
    
    return <>
     <h1>Home Page</h1>
     {title}
     <button onClick={handleClick}>Click</button>
     <Section title={title}/>
    </>
}