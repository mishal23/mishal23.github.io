import React from "react"
import SEO from "../components/seo"
import Default from "../components/default"
import Post from "../components/post"


const ContactPage = () => (
	<>
	<SEO title="Contact" />
  	<Default/>
  	<Post title="Contact">
    	<form className="form" action="https://formspree.io/shahmishal1998@gmail.com" method="POST">
  			<div className="form-item">
      			<label className="contact-label" for="name">Name:</label>
      			<input type="text" placeholder="Your name" id="name" className="contact-input" name="name" tabindex="1" required/>
  			</div>
		  	<div className="form-item">
		      	<label className="contact-label" for="email">Email:</label>
		      	<input type="email" placeholder="Your email" id="email" className="contact-input" name="_replyto" tabindex="2" required/>
		  	</div>
		  	<div className="form-item">
		    	<label className="contact-label" for="message">Message:</label>
		    	<textarea className="contact-textarea" placeholder="Your message" className="contact-input" rows="4" id="message" name="message" tabindex="3" required></textarea>
		  	</div>
		  	<div className="form-item">
		    	<button type="submit" value="Send" className="form-btn">Send</button>
		  	</div>
		</form>
    </Post>
  	</>
)

export default ContactPage
