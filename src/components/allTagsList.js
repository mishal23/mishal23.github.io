import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

const AllTagsList = () => {
  const data = useStaticQuery(
    graphql`
      query AllTagsList {
        allMarkdownRemark {
          group(field: { frontmatter: { tags: SELECT } }) {
            tag: fieldValue
            totalCount
          }
        }
      }
    `
  )
  console.log(data)
  const { allMarkdownRemark } = data

  return (
    <div>
      <h1>Tags</h1>
      <ul>
        {allMarkdownRemark.group.map(({ tag, totalCount }) => (
          <li>
            <Link to={`/tags/${tag}`} className="anchor-force-highlight">
              {" "}
              {tag} ({totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AllTagsList
