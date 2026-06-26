import CoffeeBeans from "../assets/blogs/CoffeeBeans.png";
import BrewingGuide from "../assets/blogs/BrewingGuide.png";
import CafeLifestyle from "../assets/blogs/CafeLifestyle.png";

function Blogs() {
  return (
    <section id="blogs" className="BlogSection">

      <h2>Latest Blogs</h2>

      <div className="BlogContainer">

        <div className="BlogCard">
          <img src={CoffeeBeans} alt="Coffee Beans" />

          <div className="BlogContent">
            <h3>Choosing the Perfect Coffee Beans</h3>
            <p>
              Learn how different coffee beans affect flavor, aroma,
              and the perfect brewing experience.
            </p>

            <button>Read More</button>
          </div>
        </div>


        <div className="BlogCard">
          <img src={BrewingGuide} alt="Brewing Guide" />

          <div className="BlogContent">
            <h3>Brewing Coffee Like a Barista</h3>
            <p>
              Discover techniques used by professional baristas
              to make café quality coffee at home.
            </p>

            <button>Read More</button>
          </div>
        </div>


        <div className="BlogCard">
          <img src={CafeLifestyle} alt="Cafe Lifestyle" />

          <div className="BlogContent">
            <h3>Why Cafes Inspire Creativity</h3>
            <p>
              Explore why cafés have become the perfect place
              for work, conversations, and inspiration.
            </p>

            <button>Read More</button>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Blogs;