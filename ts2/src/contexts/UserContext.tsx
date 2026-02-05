import  {createContext, useState, type Dispatch, type SetStateAction} from 'react';

export type User={
    id:number
    name:string
    age:number
    email:string
}
export interface UserContextInterface{
    user:User,
    setUser:Dispatch<SetStateAction<User>>
}
const defaultState={
    user:{
        id:0,
        name:'',
        age:0,
        email:''
    },
    setUser:(user:User)=>{}
 } as UserContextInterface

export const UserContext=createContext(defaultState);

type Props={
    children:React.ReactNode
}
export default function UserProvider({children}:Props){
    const[user,setUser]=useState<User>({
        id:0,
        name:'',
        age:0,
        email:''
    });
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}