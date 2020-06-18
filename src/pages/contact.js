import React from "react"
import SEO from "../components/seo"
import Default from "../components/default"
import Post from "../components/post"


const ContactPage = () => (
	<>
	<SEO title="Contact" />
  	<Default/>
  	<Post title="Get in touch">
  		<p>
  			There are plenty of ways to contact me, ping me up for a chat related to open-source, 
  			software engineering (web), hackathons, speaking at events, communities, or just send a Hi 
  			<span role="img" aria-label="wave" aria-labelledby="hi"> 👋</span>, 
  			I'll get back to you. I also love to talk about security, networking, DevOps, databases.
  		</p>
    	<form className="form" action="https://formspree.io/shahmishal1998@gmail.com" method="POST">
  			<div className="form-item">
      			<label className="contact-label" htmlFor="name">Name:</label>
      			<input type="text" placeholder="Your name" id="name" className="contact-input" name="name" required/>
  			</div>
		  	<div className="form-item">
		      	<label className="contact-label" htmlFor="email">Email:</label>
		      	<input type="email" placeholder="Your email" id="email" className="contact-input" name="_replyto" required/>
		  	</div>
		  	<div className="form-item">
		    	<label className="contact-label" htmlFor="message">Message:</label>
		    	<textarea placeholder="Your message" rows="4" id="message" className="contact-textarea contact-input" name="message" required></textarea>
		  	</div>
		  	<div className="form-item">
		    	<button type="submit" value="Send" className="form-btn">Send</button>
		  	</div>
		</form>
    </Post>
  	</>
)

export default ContactPage
