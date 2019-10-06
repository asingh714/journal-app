import React from 'react'
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header>
      {/* logo */}
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/journal">Journal</NavLink>
        <NavLink to="/signin">Login / Sign Up</NavLink>
      </nav>
    </header>
  )
}

export default Header
