import React from "react"
import { Link } from "gatsby"
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaFacebookF,
  FaEnvelope,
  FaTelegramPlane,
  FaHeart,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer">
      Made with <FaHeart color="red" /> by <Link to="/">Mishal Shah</Link>
      <ul className="social">
        <li>
          <a
            href="mailto:shahmishal1998@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="social-icons" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mishal23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icons" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mishal23/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icons" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/mishal.shah.7731/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="social-icons" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/1998Mishal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="social-icons" />
          </a>
        </li>
        <li>
          <a
            href="https://t.me/mishal23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane className="social-icons" />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
