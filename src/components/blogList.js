import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const BlogList = () => {
  const data = useStaticQuery(
    graphql`
      query BlogList {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { blog: { eq: true } } }
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

  return (
    <>
      <div className="posts">
        {allMarkdownRemark.edges.map(({ node }) => (
          <div className="post blurb" key={node.frontmatter.title}>
            <div className="post-header">
              <div className="meta">
                <div className="date">{node.frontmatter.date}</div>
              </div>
              <h3 className="title">
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h3>
            </div>
            <div className="description">
              {node.frontmatter.description}{" "}
              <Link to={node.fields.slug}>(Read more ...)</Link>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </>
  )
}

export default BlogList
