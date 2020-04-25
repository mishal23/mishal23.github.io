import React from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby"

// import * as S from "../components/layout.css"
import Default from "../components/default"
import Post from "../components/post"
// import Seo from "../components/seo"
// import ConcatWords from "../utils/ConcatWords"
// import formatDate from "../utils/formatDate"

const BlogPost = ({ data }) => {
  const { markdownRemark } = data
  // const imageSource = markdownRemark.frontmatter.image.childImageSharp.fluid.src

  return (
    <>
    <Default></Default>
    <Post title={markdownRemark.frontmatter.title} date={markdownRemark.frontmatter.date}>
      <p>{markdownRemark.frontmatter.description}</p>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} /> 
    </Post>
    </>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image
        description
      }
    }
  }
`
