import espresso from "../assets/hotcoffee/espresso.png";
import cappuccino from "../assets/hotcoffee/cappuccino.png";
import latte from "../assets/hotcoffee/latte.png";
import mocha from "../assets/hotcoffee/mocha.png"

function Products() {
  return (
    <div>
    <section id="HotCoffee" className="ProductSection">

      <h2>Hot Coffee</h2>

      <div className="ProductContainer">

        <div className="ProductCard">
          <img src={espresso} alt="Espresso" />

          <div className="CardContent">
            <h3>Espresso</h3>
            <p>Strong rich coffee shot</p>
            <span>₹120</span>
            <button>Order Now</button>
          </div>
        </div>


        <div className="ProductCard">
          <img src={cappuccino} alt="Cappuccino" />

          <div className="CardContent">
            <h3>Cappuccino</h3>
            <p>Milk foam creamy coffee</p>
            <span>₹180</span>
            <button>Order Now</button>
          </div>
        </div>


        <div className="ProductCard">
          <img src={latte} alt="Latte" />

          <div className="CardContent">
            <h3>Latte</h3>
            <p>Smooth milk blended coffee</p>
            <span>₹190</span>
            <button>Order Now</button>
          </div>
        </div>


        <div className="ProductCard">
          <img src={mocha} alt="Mocha" />

          <div className="CardContent">
            <h3>Mocha</h3>
            <p>Chocolate coffee blend</p>
            <span>₹210</span>
            <button>Order Now</button>
          </div>
        </div>

      </div>

    </section>
    
    </div>
  );
}

export default Products;