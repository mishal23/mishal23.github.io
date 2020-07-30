import React from "react"
import { Link } from "gatsby"
import { FaLinkedin, FaTwitter, FaGithub, FaFacebookF, FaEnvelope, FaTelegramPlane } from "react-icons/fa";


const SideBar = () => {
  return (
  <aside className="sidebar">

  <div className="sidebar-container">
    <div className="sidebar-logo">
      <Link to="/" className="logo">Mishal Shah</Link>
    </div>

    <menu className="sidebar-menu">
      <li className="menu-items"><Link to="/" className="menu-links" activeClassName="active">Home</Link></li>
      <li className="menu-items"><Link to="/about" className="menu-links" activeClassName="active">About</Link></li>
      <li className="menu-items"><Link to="/projects" className="menu-links" activeClassName="active">Projects</Link></li>
      <li className="menu-items"><Link to="/talks" className="menu-links" activeClassName="active">Talks</Link></li>
      <li className="menu-items"><Link to="/contact" className="menu-links" activeClassName="active">Contact</Link></li>
    </menu>

    <div className="btn-group">
      <Link to="/" className="mob-menu-items" activeClassName="active"><button className="navbtn">Home</button></Link>
      <Link to="/about" className="mob-menu-items" activeClassName="active"><button className="navbtn">About</button></Link>
      <Link to="/projects" className="mob-menu-items" activeClassName="active"><button className="navbtn">Projects</button></Link>
      <Link to="/talks" className="mob-menu-items" activeClassName="active"><button className="navbtn">Talks</button></Link>
      <Link to="/contact" className="mob-menu-items" activeClassName="active"><button className="navbtn">Contact</button></Link>
    </div>

    <div className="sidebar-social">
      <li className="social-items"><a href="mailto:shahmishal1998@gmail.com" className="social-links" target="_blank" rel="noopener noreferrer"><FaEnvelope className="social-icons"/></a></li>
      <li className="social-items"><a href="https://github.com/mishal23" className="social-links" target="_blank" rel="noopener noreferrer"><FaGithub className="social-icons"/></a></li>
      <li className="social-items"><a href="https://linkedin.com/in/mishal23" className="social-links" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icons"/></a></li>
      <li className="social-items"><a href="https://www.facebook.com/mishal.shah.7731" className="social-links" target="_blank" rel="noopener noreferrer"><FaFacebookF className="social-icons"/></a></li>
      <li className="social-items"><a href="https://twitter.com/@1998Mishal" className="social-links" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icons"/></a></li>
      <li className="social-items"><a href="https://t.me/mishal23" className="social-links" target="_blank" rel="noopener noreferrer"><FaTelegramPlane className="social-icons"/></a></li>
    </div>

  </div>
</aside>
)
}

export default SideBar