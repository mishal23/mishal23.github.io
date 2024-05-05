import React from "react"
import { Seo } from "../components/seo"
import Default from "../components/default"
import Post from "../components/post"
import Newsletter from "../components/newsletter"

const NewsletterPage = () => (
  <>
    <section className="container wrap">
      <Seo title="Newsletter" />
      <Default />
      <Post title="Newsletter 📝">
        <Newsletter
          data="My love for reading, learning, writing, and noting things
		 down brought me with this newsletter! I would love it if you'd sign-up. No spam, promise!"
        />
      </Post>
    </section>
  </>
)

export default NewsletterPage
