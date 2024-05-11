import React from "react"
import { Seo } from "../components/seo"
import Default from "../components/default"
import AllTagsList from "../components/allTagsList"
import Footer from "../components/footer"

const AllTagsPage = () => {
  return (
    <>
      <Seo title="mishal23" />
      <section className="container wrap">
        <Default></Default>
        <AllTagsList></AllTagsList>
      </section>
      <Footer />
    </>
  )
}

export default AllTagsPage
