import React from "react"

type Props = {
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const Search = ({ search, setSearch }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    }

    return (
        <section className="search">
         <input type="text" placeholder="Search by id or name"
          value={search} onChange={handleChange} />
        </section>
    )
}