import { useState } from "react";
import './Component.css';

 type HelloProps ={
        name:string;
        age:number;
       
    };
export const Component=({name,age}:HelloProps)=>{

const [count,setcount]=useState<number>(0);
return(
    <>
    <h1>Hello {name="jeel"} !your age is  {age=28}</h1>
    <div className="counter">
    <span>{count}</span>
    <div className="btn">
    <button onClick={()=>setcount(count+1)}>increment</button>
    <button onClick={()=>setcount(count-1)}>decrement</button>
    </div>
    </div>
    </>
)
}