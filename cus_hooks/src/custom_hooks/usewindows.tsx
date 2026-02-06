import { useEffect, useState } from "react"

export function useWindos(){

    const[windowsize,setwindowsize]=useState({
         width:window.innerWidth,
        height:window.innerHeight,
    })

    useEffect(()=>{
        window.addEventListener("resize",handlesize);
        return ()=>window.removeEventListener("resize",handlesize)
    },[]);

    function handlesize(){
        setwindowsize({
             width:window.innerWidth,
        height:window.innerHeight,
        })
    }
    return windowsize;
}