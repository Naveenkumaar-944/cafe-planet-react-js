import Croissant from "../assets/bakery/Croissant.png";
import ChocoMuffin from "../assets/bakery/ChocoMuffin.png";
import Brownie from "../assets/bakery/Brownie.png";
import Cheesecake from "../assets/bakery/Cheesecake.png";

function Bakery() {
  return (
    <section id="BakeryItems" className="ProductSection">

      <h2>Bakery Items</h2>

      <div className="ProductContainer">

        <div className="ProductCard">
          <img src={Croissant} alt="Croissant" />

          <div className="CardContent">
            <h3>Croissant</h3>
            <p>Fresh buttery flaky pastry</p>
            <span>₹140</span>
            <button>Order Now</button>
          </div>
        </div>


        <div className="ProductCard">
          <img src={ChocoMuffin} alt="Chocolate Muffin" />

          <div className="CardContent">
            <h3>Choco Muffin</h3>
            <p>Soft baked chocolate muffin</p>
            <span>₹120</span>
            <button>Order Now</button>
          </div>
        </div>


        <div className="ProductCard">
          <img src={Brownie} alt="Brownie" />

          <div className="CardContent">
            <h3>Brownie</h3>
            <p>Rich dense chocolate brownie</p>
            <span>₹150</span>
            <button>Order Now</button>
          </div>
        </div>


        <div className="ProductCard">
          <img src={Cheesecake} alt="Cheesecake" />

          <div className="CardContent">
            <h3>Cheesecake</h3>
            <p>Creamy blueberry dessert cake</p>
            <span>₹180</span>
            <button>Order Now</button>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Bakery;