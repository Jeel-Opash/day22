import { useEffect, useState } from "react";

interface FetchState<T>{
    data:T | null;
    loading:boolean;
    error:string|null;
}

export function useFetch<T>(url:string){
    const[state,setstate]=useState<FetchState<T>>({
        data:null,
        loading:true,
        error:null,
    })

    useEffect(()=>{
        async function fetchData() {
            try{
                setstate({data:null,loading:true,error:null})
                const res=await fetch(url);
console.log(res);
                if(!res.ok){
                    throw new Error(`Http error : ${res.status}`);
                }
                const data:T=await res.json();
                setstate({
                    data,loading:false,error:null
                })
            }
                catch(error:unknown){
                    setstate({
                        data:null,
                        loading:false,
                        error:(error as Error).message,

                    })
                }
            
        }
         fetchData();
    },[url]);
    return state

}