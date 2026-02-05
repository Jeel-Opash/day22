import { useContext, useEffect } from "react";
import UserProvider, { UserContext } from "./contexts/UserContext";

function UserDetails(){

    const {user}=useContext(UserContext);
    return(
        <>
        <p>User id:{user.id}</p>
        <p>User Name:{user.name}</p>
        <p>User Age:{user.age}</p>
        <p>User Email:{user.email}</p>
        </>
    )
}
function AnotherComponent(){

    const {setUser}=useContext(UserContext)
    useEffect(()=>{
        setUser({
            id:123,
            name:'John Doe',
            age:30,
            email:'JohnDoe@example.com'
    })
},[])
    return(
        <>
        <p>Some other details</p>
        </>
    )
}


function App(){
    return(
        <div>
            <UserProvider>
        <UserDetails/>
         <AnotherComponent/>
            </UserProvider>
        </div>
    )
}
export default App;