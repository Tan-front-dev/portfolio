function Contact(){
return(
    <div className="contact" id="contact">
        <span className="span-box"><i className="fa-solid fa-star"></i>Contact</span>
        <h1>Let's Make Something Awesome Together!</h1>
        <form className="contact-form">
            <div className="input">
            <input type="text" placeholder="Your name"/>
            <input type="text" placeholder="Company name" />
            <input type="email" placeholder="you@example.com"/>
            <input type="tel" placeholder="+1234567890"/>
            </div>
            <div className="text-area">
            <textarea placeholder="Write your message..." rows={6}></textarea>
            </div>
            <button className="form-button" type="submit">Send Message</button>
        </form>
    </div>
)
}

export default Contact