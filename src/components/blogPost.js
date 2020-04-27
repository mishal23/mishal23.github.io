import React from "react"
import { graphql } from "gatsby"

import Default from "../components/default"
import Post from "../components/post"
import SEO from "../components/seo"


const BlogPost = ({ data }) => {
  const { markdownRemark } = data

  return (
    <>
    <SEO
      title={markdownRemark.frontmatter.title}
      description={markdownRemark.frontmatter.description}
    />
    <Default></Default>
    <Post 
      title={markdownRemark.frontmatter.title} 
      date={markdownRemark.frontmatter.date} >
      <p>
        {markdownRemark.frontmatter.description}
      </p>
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
        description
      }
    }
  }
`
