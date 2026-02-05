import { useEffect, useState } from "react"
import Data from "./assets/api/data.json"

type User = {
    id: number
    name: string
    email: string
    address: string
    country: string
}

type Props = {
    search: string
}

export const User = ({ search }: Props) => {
    const users = Data as User[]
    const [currentPage, setCurrentpage] = useState<number>(1)
    const [highlightId, setHighlightId] = useState<number | null>(null)

    const usersperpage = 5
    const lastuserindex = currentPage * usersperpage
    const firstuserindex = lastuserindex - usersperpage
    const currentusers = users.slice(firstuserindex, lastuserindex)

    useEffect(() => {
        if (!search || search.trim() === "") {
         setHighlightId(null)
          return
        }
        const term = search.trim()
        const num = Number(term)
        let foundIndex = -1
        if (!isNaN(num)) {
         foundIndex = users.findIndex((u) => u.id === num)
        }
        if (foundIndex === -1) {
        foundIndex = users.findIndex((u) => u.name.toLowerCase().includes(term.toLowerCase()))
        }
        if (foundIndex !== -1)
             {
        const page = Math.floor(foundIndex / usersperpage) + 1
         setCurrentpage(page)
        setHighlightId(users[foundIndex].id)
        } 
        else {
            setHighlightId(null)
        }
    }, [search])

    return (
        <div>
            <table border={1} cellPadding={10}>
                <thead>
                    <tr>
                    <th> Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {currentusers.map((user) => (
                        <tr                            key={user.id}
                        style={{ backgroundColor: user.id === highlightId ? "lightyellow" : undefined ,
                            color:user.id===highlightId ?"black":undefined }} >
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td>{user.country}</td>
                        </tr>                    ))}
            </tbody>
            </table>
            <div style={{ margin: "20px" }}>
                {Array.from({ length: Math.ceil(users.length / usersperpage) }, (_, index) => (
                    <button
                        key={index}
                    onClick={() => setCurrentpage(index + 1)}
                    style={{
                        margin: "5px",
                        backgroundColor: currentPage === index + 1 ? "lightblue" : "black",
                          color: currentPage === index + 1 ? "black" : "white",
                        }} >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}