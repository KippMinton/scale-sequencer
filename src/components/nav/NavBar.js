import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
  return (
    <ul className="navbar">
      <li className="navbar__item active">
        <Link className="navbar__link" to="/">Sequencer</Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/profile">Profile</Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/users">Users</Link>
      </li>
    </ul>
  )
}
