import { useState } from "react"

const Search = () => {
    const [inputValue, setInputValue] = useState('')
    const handleChange = (e)=>{
        setInputValue(e.target.value)
    }
    return (
        <input onChange={handleChange} title='dummySerch' type="text" />
    )
}

export default Search
