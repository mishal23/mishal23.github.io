import React from "react"
import { graphql, Link } from "gatsby"
import Default from "./default"
import Footer from "./footer"

const TagsPage = ({ pageContext, data }) => {
  const { tag } = pageContext

  const { allMarkdownRemark } = data
  console.log("Queried data")
  console.log(data)

  return (
    <>
      <section className="container wrap">
        <Default></Default>
        <h2 class="tag-header">{tag}</h2>
        <hr></hr>
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
      </section>
      <Footer />
    </>
  )
}

export default TagsPage

export const query = graphql`
  query TaggedPages($tag: String) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] }, blog: { eq: true } } }
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
