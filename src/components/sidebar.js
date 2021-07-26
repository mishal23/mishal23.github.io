import React from "react"
import { Link } from "gatsby"

const SideBar = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Mishal Shah</Link>
      </div>
      <nav className="nav">
        <Link activeClassName="active" to="/about">
          About
        </Link>
        <Link activeClassName="active" to="/projects">
          Projects
        </Link>
        <Link activeClassName="active" to="/talks">
          Talks
        </Link>
        <Link activeClassName="active" to="/contact">
          Contact
        </Link>
      </nav>
    </div>
  )
}

export default SideBar
