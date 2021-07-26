import React from "react"
import SEO from "../components/seo"
import Default from "../components/default"
import Post from "../components/post"
import { Link } from "gatsby"
import Footer from "../components/footer"

const ContactPage = () => (
  <>
    <SEO title="Contact" />
    <section className="container wrap">
      <Default />
      <Post title="Get in touch 📝">
        <p>
          There are plenty of ways to contact me, ping me up for a chat related
          to open-source, software engineering (web), hackathons, speaking at
          events, communities, or just send a Hi
          <span role="img" aria-label="wave" aria-labelledby="hi">
            {" "}
            👋
          </span>
          , I'll get back to you. I also love to talk about security,
          networking, DevOps, databases. Alternatively, you could also block my
          time <Link to="https://calendly.com/mishal23/30min">here</Link>
        </p>
      </Post>
    </section>
    <Footer />
  </>
)

export default ContactPage
