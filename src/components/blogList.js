import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Default from "../components/default"


const BlogList = () => {
  const data = useStaticQuery(
  graphql`
  query BlogList {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  }
`
)
  const { allMarkdownRemark } = data
  
  // const { currentPage, numPages } = pageContext

  return(
  <>
    return(
      <main role="main">
    <div className="content">
    {allMarkdownRemark.edges.map(({ node }) => (
    <article class="main-article">
      <div class="wrap-content">
        <header class="header-article">
          <h2 class="title-article"><a href="{}">{node.frontmatter.title}</a></h2>
          <div class="post-date"><span>{node.frontmatter.date}&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        </header>
        <p>{node.frontmatter.description} <Link to={node.fields.slug}>(Read more ...)</Link></p>
      </div>
    </article>
  ))}
    </div>
    </main>
    )
  </>
  )
}

export default BlogList
