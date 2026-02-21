import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSuccess(false);

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mojnnyye", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("✔ Message Sent Successfully!");
      setIsSuccess(true);
      form.reset();
    } else {
      setStatus("Something went wrong. Please try again.");
      setIsSuccess(false);
    }
  };

  return (
    <div className="contact" id="contact">
      <span className="span-box">
        <i className="fa-solid fa-star"></i> Contact
      </span>

      <h1>Open to Opportunities</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="text-area">
          <textarea
            name="message"
            placeholder="Tell me about the opportunity..."
            rows={5}
            required
          ></textarea>
        </div>
        <button className="btn b1" type="submit">
            Send Message
        </button>
      </form>

      {status && (
        <p
          style={{
            marginTop: "15px",
            fontWeight: "500",
            color: isSuccess ? "green" : "red",
          }}
        >
          {status}
          <br />
          {isSuccess && "I’ll get back to you soon."}
        </p>
      )}

      <div style={{ marginTop: "15px"}}>
        <p className="c-white">I typically respond within <span className="number">24</span> hours.</p>
        <p className="c-white">
          Prefer direct contact? Email me at{" "}
          <a href="mailto:ertazatanbir@gmail.com" className="email-link">ertazatanbir@gmail.com</a>
        </p>
      </div>
    </div>
  )
}

export default Contact;

