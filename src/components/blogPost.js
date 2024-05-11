import React from "react"
import { graphql } from "gatsby"
import Default from "../components/default"
import Post from "../components/post"
import { Seo } from "../components/seo"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import useSiteMetadata from "../utils/siteMetadata"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import Footer from "./footer"
import TagsList from "./tagsList"

deckDeckGoHighlightElement()

const BlogPost = ({ path, data }) => {
  const { markdownRemark } = data
  const { siteUrl } = useSiteMetadata()

  let disqusConfig, disqusCommentCount, disqusCommentBox
  if (markdownRemark.frontmatter.blog) {
    disqusConfig = {
      url: `${siteUrl}${path}`,
      identifier: `${siteUrl}${path}`,
      title: markdownRemark.frontmatter.title,
    }

    disqusCommentCount = (
      <CommentCount config={disqusConfig} placeholder={"..."} />
    )
    disqusCommentBox = <Disqus config={disqusConfig} />
  }

  return (
    <>
      <>
        <Seo
          title={markdownRemark.frontmatter.title}
          description={markdownRemark.frontmatter.description}
          keywords={markdownRemark.frontmatter.keywords}
        />
        <section className="container wrap">
          <Default></Default>
          <Post
            title={markdownRemark.frontmatter.title}
            date={markdownRemark.frontmatter.date}
          >
            <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
            <TagsList tags={markdownRemark.frontmatter.tags} />
            {disqusCommentCount}
            {disqusCommentBox}
          </Post>
        </section>
        <Footer />
      </>
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
        keywords
        blog
        tags
      }
    }
  }
`
