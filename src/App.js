import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import RecipeCards from './components/RecipeCards'

function App() {

  const [searchValue, setSearchValue] = useState("")
  const [data, setData] = useState([])

  const handleSearch = (e, input) => {
    e.preventDefault()
    setSearchValue(input)
  }

  console.log(searchValue)
  
  useEffect(() => {
    const apiKey = "cddc610434f844638c9fad64aa79f2de"

    if (searchValue) {
      fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchValue}`)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))
    } else {
      console.log("no results found")
    }
  }, [searchValue])

  console.log(data)
  
  
  return (
    <div>
      <Header handleSearch={handleSearch}/>
      <RecipeCards data={data}/>
    </div>
  );
}

export default App;
