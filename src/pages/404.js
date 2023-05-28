import React from "react"
import { Seo } from "../components/seo"
import Default from "../components/default"
import Post from "../components/post"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <>
    <Seo title="404: Page Not Found" />
    <section className="container wrap">
      <Default />
      <Post title="404 Page">
        <p>
          Nothing found! Please go back to the <Link to="/">home page.</Link>
        </p>
      </Post>
    </section>
  </>
)

export default NotFoundPage
