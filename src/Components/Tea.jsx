import MasalaTea from "../assets/tea/MasalaTea.png";
import GreenTea from "../assets/tea/GreenTea.png";
import LemonTea from "../assets/tea/LemonTea.png";
import GingerTea from "../assets/tea/GingerTea.png";

function Tea() {
  return (
    <section id="Tea" className="ProductSection">

      <h2>Tea</h2>

      <div className="ProductContainer">

        <div className="ProductCard">
          <img src={MasalaTea} alt="Masala Tea" />

          <div className="CardContent">
            <h3>Masala Tea</h3>
            <p>Traditional Indian spiced tea</p>
            <span>₹60</span>
            <button>Order Now</button>
          </div>
        </div>


        <div className="ProductCard">
          <img src={GreenTea} alt="Green Tea" />

          <div className="CardContent">
            <h3>Green Tea</h3>
            <p>Healthy antioxidant herbal tea</p>
            <span>₹90</span>
            <button>Order Now</button>
          </div>
        </div>


        <div className="ProductCard">
          <img src={LemonTea} alt="Lemon Tea" />

          <div className="CardContent">
            <h3>Lemon Tea</h3>
            <p>Refreshing citrus infused tea</p>
            <span>₹70</span>
            <button>Order Now</button>
          </div>
        </div>


        <div className="ProductCard">
          <img src={GingerTea} alt="Ginger Tea" />

          <div className="CardContent">
            <h3>Ginger Tea</h3>
            <p>Warm ginger flavored tea</p>
            <span>₹80</span>
            <button>Order Now</button>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Tea;