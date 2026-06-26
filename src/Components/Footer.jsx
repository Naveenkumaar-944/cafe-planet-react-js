function Footer() {
  return (
    <footer className="FooterSection">

      <div className="FooterContainer">

        {/* Brand */}

        <div className="FooterBrand">
          <h2>Cafe Planet</h2>
          <p>
            Brewing happiness one cup at a time.
          </p>
        </div>


        {/* Quick Links */}

        <div className="FooterLinks">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#AboutSection">About</a></li>
            <li><a href="#HotCoffee">Products</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>


        {/* Social */}

        <div className="FooterSocial">
          <h3>Follow Us</h3>

          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>YouTube</p>
        </div>

      </div>


      {/* Bottom */}

      <div className="FooterBottom">
        <p>© 2026 Cafe Planet | All Rights Reserved</p>
      </div>

    </footer>
  );
}

export default Footer;