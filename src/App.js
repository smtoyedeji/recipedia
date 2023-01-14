import React, { useState, useEffect } from 'react'
import Header from './components/Header'

function App() {

  const [searchValue, setSearchValue] = useState("")

  const handleSearch = (e, input) => {
    e.preventDefault()
    setSearchValue(input)
  }

  console.log(searchValue)

  
  
  return (
    <div>
      <Header handleSearch={handleSearch}/>
    </div>
  );
}

export default App;
