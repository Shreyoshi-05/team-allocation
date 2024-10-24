import React from 'react'
import './Home.css'

const Header = ({selectedteam , teamlength}) => {
  return (
    <header>
      <h2>Team Member Allocation</h2>
      <h3>{teamlength} member of {selectedteam} </h3>
    </header>
  )
}

export default Header
