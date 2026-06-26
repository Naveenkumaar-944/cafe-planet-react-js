import HazelnutBlast from "../assets/signature/HazelnutBlast.png";
import IrishCoffee from "../assets/signature/IrishCoffee.png";
import CoconutLatte from "../assets/signature/CoconutLatte.png";
import ChocoLava from "../assets/signature/ChocoLava.png";

function SignatureDrinks() {
  return (
    <section id="SignatureDrinks" className="ProductSection">

      <h2>Signature Drinks</h2>

      <div className="ProductContainer">

        <div className="ProductCard">
          <img src={HazelnutBlast} alt="Hazelnut Blast" />

          <div className="CardContent">
            <h3>Hazelnut Blast</h3>
            <p>Nutty creamy premium coffee</p>
            <span>₹280</span>
            <button>Order Now</button>
          </div>
        </div>


        <div className="ProductCard">
          <img src={IrishCoffee} alt="Irish Coffee" />

          <div className="CardContent">
            <h3>Irish Coffee</h3>
            <p>Classic creamy dark roast</p>
            <span>₹300</span>
            <button>Order Now</button>
          </div>
        </div>


        <div className="ProductCard">
          <img src={CoconutLatte} alt="Coconut Latte" />

          <div className="CardContent">
            <h3>Coconut Latte</h3>
            <p>Coffee blended coconut flavor</p>
            <span>₹260</span>
            <button>Order Now</button>
          </div>
        </div>


        <div className="ProductCard">
          <img src={ChocoLava} alt="Choco Lava" />

          <div className="CardContent">
            <h3>Choco Lava</h3>
            <p>Rich chocolate creamy coffee</p>
            <span>₹290</span>
            <button>Order Now</button>
          </div>
        </div>

      </div>

    </section>
  );
}

export default SignatureDrinks;