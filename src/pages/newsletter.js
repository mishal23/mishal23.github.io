import React from "react"
import SEO from "../components/seo"
import Default from "../components/default"
import Post from "../components/post"
import Newsletter from "../components/newsletter"

const NewsletterPage = () => (
  <>
    <SEO title="Newsletter" />
    <Default />
    <Post title="Newsletter 📝">
      <Newsletter
        data="My love for reading, learning, writing, and noting things
		 down brought me with this newsletter! I would love it if you'd sign-up. No spam, promise!"
      />
    </Post>
  </>
)

export default NewsletterPage
