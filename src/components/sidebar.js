import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SideBar = () => {
  return (
  <aside className="sidebar">

  <div className="sidebar-container">
    <div className="sidebar-logo">
      <a href="/" className="logo">Mishal Shah</a>
    </div>

    <menu className="sidebar-menu">
      <li className="menu-items"><a className="menu-links" href="/">Home</a></li>
      <li className="menu-items"><a className="menu-links" href="/about/">About</a></li>
      <li className="menu-items"><a className="menu-links" href="/projects/">Projects</a></li>
      <li className="menu-items"><a className="menu-links" href="/contact/">Contact</a></li>
    </menu>

    <div className="btn-group">
      <a href="/" className="mob-menu-items"><button className="navbtn">Home</button></a>
      <a href="/about/" className="mob-menu-items"><button className="navbtn">About</button></a>
      <a href="/projects/" className="mob-menu-items"><button className="navbtn">Projects</button></a>
      <a href="/contact/" className="mob-menu-items"><button className="navbtn">Contact</button></a>
    </div>

    <div className="sidebar-social">
      <li className="social-items"><a href="mailto:shahmishal1998@gmail.com" className="social-links"><FontAwesomeIcon icon={['fa', 'fa-envelope']} className="social-icons" /><i className="social-icons fa fa-envelope" aria-hidden="true"></i></a></li>
      <li className="social-items"><a href="https://github.com/" className="social-links"><i className="social-icons fa fa-github" aria-hidden="true"></i></a></li>
      <li className="social-items"><a href="https://linkedin.com/" className="social-links"><i className="social-icons fa fa-linkedin" aria-hidden="true"></i></a></li>
      <li className="social-items"><a href="https://www.facebook.com/" className="social-links"><i className="social-icons fa fa-facebook" aria-hidden="true"></i></a></li>
      <li className="social-items"><a href="https://twitter.com/" className="social-links"><i className="social-icons fa fa-twitter" aria-hidden="true"></i></a></li>
    </div>

  </div>
</aside>
)
}

export default SideBar