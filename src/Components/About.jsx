function About() {
  return (
    <section id="AboutSection" className="AboutSection">

      <div className="AboutImage">
        {/* coffee image here */}
      </div>

      <div className="AboutContent">

        <h2>About Our Coffee</h2>

        <p>
          We believe coffee is more than just a drink — it is an experience.
          Our beans are carefully selected from premium farms and roasted to
          perfection to bring out rich aroma and unforgettable taste.
        </p>

        <p>
          From classic espresso to handcrafted cappuccino, every cup is made
          with passion and served fresh for coffee lovers who appreciate quality
          in every sip.
        </p>

        <div className="AboutStats">
          <div>
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>

          <div>
            <h3>50K+</h3>
            <p>Happy Customers</p>
          </div>

          <div>
            <h3>25+</h3>
            <p>Coffee Varieties</p>
          </div>
        </div>

        <a href="#">Explore Menu</a>

      </div>

    </section>
  );
}

export default About;