import { useState } from "react"
import { Search } from "./Search"
import { User } from "./user"

export const UserPage = () => {
    const [search, setSearch] = useState<string>("")
    return (
        <>
            <h1>Student detail</h1>
           
            <Search search={search} setSearch={setSearch} />
            <User search={search} />
            
        </>
    )
}