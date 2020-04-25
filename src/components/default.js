import React from "react"
// import Header from "./header"
// import PropTypes from "prop-types"
import SideBar from "./sidebar"
import { Link } from "gatsby"

import "./stylesheets/main.css"
import "./stylesheets/mobile.css"


const Default = () => {
	return(
		<>
		<Link to="//fonts.googleapis.com/css?family=Finger+Paint|PT+Sans:400,700"></Link>
		<SideBar>
		</SideBar>
		</>
    )
}


export default Default