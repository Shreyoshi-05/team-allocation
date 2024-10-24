import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div id="home-nav">
        <Link to="/">Home</Link>
      </div>

      <div id="teammem">
        <Link to="/other">Teams</Link>
      </div>
    </nav>
  )
}

export default Nav
