import React from "react"

const Newsletter = () => {
    return(
        <div className="newsletter">
            <p>Want to read more posts like the above? Sign-up to my monthly newsletter!</p>
            <form className="form" action="https://buttondown.email/api/emails/embed-subscribe/mishal23" method="POST" target="popupwindow"
    onsubmit="window.open('https://buttondown.email/mishal23', 'popupwindow')"
    class="embeddable-buttondown-form">
                <div className="newsletterform-item">
                    <input type="email" placeholder="Enter your email" id="bd-email" className="contact-input" name="email" required/>
                </div>
                <div className="newsletterform-item">
                    <input type="hidden" value="1" name="embed"/>
                </div>
                <div className="newsletterform-item">
                    <input type="submit" value="Subscribe" className="newsletterform-btn"/>
                </div>
            </form>
            <p>A monthly newsletter about software engineering, code and self-improvement.</p>
        </div>
    )
}

export default Newsletter
