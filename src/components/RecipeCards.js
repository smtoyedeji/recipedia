import React from 'react'
import styled from 'styled-components'

function RecipeCards({ data }) {
  // const elements = data.map(item => {
  //   return (
  //     <Cards key={item.id}>
  //       <img src={item.image} alt={item.title}/>
  //       <h4>{item.title}</h4>
  //     </Cards>
  //   )
  // })

  return (
    <Container>
        {/* {elements} */}
        <Cards>
          <img src={"https://source.unsplash.com/random"} alt=""/>
          <h4>Recipe</h4>
        </Cards>
        <Cards>
          <img src={"https://source.unsplash.com/random"} alt=""/>
          <h4>Recipe</h4>
        </Cards>
        <Cards>
          <img src={"https://source.unsplash.com/random"} alt=""/>
          <h4>Recipe</h4>
        </Cards>
        <Cards>
          <img src={"https://source.unsplash.com/random"} alt=""/>
          <h4>Recipe</h4>
        </Cards>
    </Container>
  )
}

export default RecipeCards

const Container = styled.div`
  padding: 64px 32px 32px;
  background-color: #000;
  color: #333;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 28px;

`

const Cards = styled.div`
  background-color: #FFF;
  height: 340px;
  

  img {
    width: 100%;
  }
`