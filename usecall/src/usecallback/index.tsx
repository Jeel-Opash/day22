import { useCallback, useState } from "react"
import Search from "./Search"
import './index.css'
const data = ['jeel', 'akke', 'ede', 'deded', 'qqq', 'hffr']

export function Index() {
const[users,setUsers] = useState<string[]>(data);

    const handleSearch = useCallback((text: string) => {
        const filtered = data.filter((user) =>
            user.toLowerCase().includes(text.toLowerCase())
        )
        setUsers(filtered)
    }, [])

    return (
        <div className="tutorial">
            <div className="align-center">
                <button>Shuffle</button>
                <Search onChange={handleSearch} />
            </div>
            <ul>
                {users.map((user) => (
                <li key={user}>{user}</li>
                ))}
            </ul>
        </div>
    )
}