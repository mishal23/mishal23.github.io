import React from "react"
import Header from "./header"
import PropTypes from "prop-types"
import SideBar from "./sidebar"

import "./main.css"


const Default = ({ content }) => {
	return(
		<> 
		<SideBar> </SideBar>
		<main>
		<div className="content">{content}</div>
		</main>
		</>
    )
}


Default.propTypes = {
  content: PropTypes.node.isRequired,
}


export default Default