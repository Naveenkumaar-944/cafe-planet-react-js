import FrenchFries from "../assets/snacks/FrenchFries.png";
import ClubSandwich from "../assets/snacks/ClubSandwich.png";
import CheeseBurger from "../assets/snacks/CheeseBurger.png";
import OnionRings from "../assets/snacks/OnionRings.png";

function Snacks() {
  return (
    <section id="Snacks" className="ProductSection">

      <h2>Snacks</h2>

      <div className="ProductContainer">

        <div className="ProductCard">
          <img src={FrenchFries} alt="French Fries" />

          <div className="CardContent">
            <h3>French Fries</h3>
            <p>Crispy golden potato fries</p>
            <span>₹130</span>
            <button>Order Now</button>
          </div>
        </div>


        <div className="ProductCard">
          <img src={ClubSandwich} alt="Club Sandwich" />

          <div className="CardContent">
            <h3>Club Sandwich</h3>
            <p>Fresh layered grilled sandwich</p>
            <span>₹160</span>
            <button>Order Now</button>
          </div>
        </div>


        <div className="ProductCard">
          <img src={CheeseBurger} alt="Cheese Burger" />

          <div className="CardContent">
            <h3>Cheese Burger</h3>
            <p>Loaded cheesy grilled burger</p>
            <span>₹220</span>
            <button>Order Now</button>
          </div>
        </div>


        <div className="ProductCard">
          <img src={OnionRings} alt="Onion Rings" />

          <div className="CardContent">
            <h3>Onion Rings</h3>
            <p>Crispy fried onion rings</p>
            <span>₹140</span>
            <button>Order Now</button>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Snacks;