import { memo } from "react"
interface SearchProps {
  onChange: (text: string) => void
}

function Search({ onChange }: SearchProps) {
  return (
    <input type="text" placeholder="Search"
      onChange={(e) => onChange((e.target as HTMLInputElement).value)}/>
  )
}
export default memo(Search);