import React, {useState} from 'react'
import styled from 'styled-components'
import { MdSearch } from 'react-icons/md'


function Search({ handleSearch }) {
  const [input, setInput] = useState("")
  

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    handleSearch(e, input)
    setInput("")
  }

  console.log(input)

  return (
    <Container onSubmit={handleSubmit}>
      <MdSearch style={{ marginLeft: "1rem", position: "absolute",  opacity: "0.4"}}  size="1.5em"/>
      <SearchBar 
        id="search-bar" 
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Find a Recipe">
      </SearchBar>
    </Container>
  )
}

export default Search



const Container = styled.form`
  padding: .5rem;
  position: relative;
  display: flex;  
  align-items: center;
  width: 100%;
`

const SearchBar = styled.input`
  padding: 1em 1em 1em 3.2em;
  width: 100%;
  outline: none;
  border: transparent;
  font-size: 16px;

  ::placeholder {
      font-size: 16px;
      font-weight: 700;
      opacity: 0.6;
    }
`