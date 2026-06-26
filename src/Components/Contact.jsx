function Contact() {
  return (
    <section id="contact" className="ContactSection">

      <h2>Contact Us</h2>

      <div className="ContactContainer">

        {/* Left Side */}

        <div className="ContactInfo">

          <h3>Visit Cafe Planet</h3>

          <p>📍 21 Coffee Street, Chennai, India</p>

          <p>📞 +91 98765 43210</p>

          <p>✉ cafeplanet@gmail.com</p>

          <p>⏰ Open : 8:00 AM - 11:00 PM</p>

        </div>


        {/* Right Side */}

        <div className="ContactForm">

          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea placeholder="Your Message"></textarea>

          <button>Send Message</button>

        </div>

      </div>

    </section>
  );
}

export default Contact;