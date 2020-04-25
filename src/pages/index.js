import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Default from "../components/default"


const IndexPage = ({ data, pageContext}) => {
  console.log(data)
  const { allMarkdownRemark } = data
  const { currentPage, numPages } = pageContext

  return(
  <>
  <Default></Default>
  {allMarkdownRemark.edges.map(({ node }) => {
    return(
    <>
    <article class="main-article">
      <div class="wrap-content">
        <header class="header-article">
          <h2 class="title-article"><a href="{}">{}</a></h2>
          <div class="post-date"><span>{}&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        </header>
        <p>{} <a class="more" href="{}">(Read more...)</a></p>
      </div>
    </article>
    </>
    )
  })}
  </>
  )
}

export default IndexPage


export const query = graphql`
  query blogPostsList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`