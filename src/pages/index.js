import React from "react"
import SEO from "../components/seo"
import Default from "../components/default"
import BlogList from "../components/blogList"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <>
      <SEO title="mishal23" />
      <section className="container wrap">
        <Default></Default>
        <BlogList></BlogList>
      </section>
      <Footer />
    </>
  )
}

export default IndexPage
