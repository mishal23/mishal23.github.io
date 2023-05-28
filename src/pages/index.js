import React from "react"
import { Seo } from "../components/seo"
import Default from "../components/default"
import BlogList from "../components/blogList"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <>
      <Seo title="mishal23" />
      <section className="container wrap">
        <Default></Default>
        <BlogList></BlogList>
      </section>
      <Footer />
    </>
  )
}

export default IndexPage
