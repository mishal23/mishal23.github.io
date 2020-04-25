import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
import Default from "../components/default"
import Post from "../components/post"

const ProjectsPage = () => (
	<>
    <Default></Default>
    <Post title="Projects">
    	<p>Most of my projects can be found on my <a href="https://github.com/mishal23">Github account</a>. I have worked on many group and personal projects. Most of them involved using the following technologies or languages:</p>

		<h3>Languages</h3>
		<p>C, C++, Python, Erlang, JavaScript, HTML, CSS</p>

		<h3>DBMS</h3>
		<p>MySQL, NoSQL (MongoDB)</p>

		<h3>Tools/Frameworks</h3>
		<p>MEAN Stack, Django, Git, OpenMP, jQuery, Laravel, Ruby on Rails, STL, ns-3</p>
    </Post>
    </>
)

export default ProjectsPage
