import React from 'react'
import styled from 'styled-components'
import Search from './Search'


function Header({ handleSearch }) {
  return (
    <Container>
      <h1>recipedia</h1>
      <Search handleSearch={handleSearch}/>
    </Container>
  )
}

export default Header


const Container = styled.header`
  width: 100vw;
  height: 70px;
  padding: 0 20px;
  padding-left: 20px;
  background-color: #f93f23;
  display: flex;
  align-items: center;

  h1 {
    width: 40%;
    color: #fff;
  }

  @media (max-width: 481px){
    flex-direction: column;
    height: 100px;
    align-items: center;
    justify-content: center;

    h1 {
      width: 100%;
      text-align: center;
    }
  }

`