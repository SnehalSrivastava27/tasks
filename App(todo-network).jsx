import { Children, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App()
{
   const[todos,setTodos]=useState([]);
   useEffect(function(){
      fetch("https://*****/todos").then(async (res)=>{
         const json=await res.json();
         setTodos(json.todos);
      })
   },[])
   return(
      <div>
         {todos.map(function(tara)
         {
            <Display id={tara.title} title={tara.title}description={tara.description}completed={tara.completed}></Display>
         })}
      </div>
   )
}
function Display({id,title,description,completed})
{
   return <div>
      
         <h2>{id}</h2>
         <h1>{title}</h1>  
         <h2>{description}</h2>
         <h3>{completed}</h3>
      
   </div>
}
export default App
