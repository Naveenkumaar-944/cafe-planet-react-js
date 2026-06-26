import IcedLatte from "../assets/coldcoffee/IcedLatte.png"; 
import ColdBrew from "../assets/coldcoffee/ColdBrew.png"; 
import ChocoFrappe from "../assets/coldcoffee/ChocoFrappe.png"; 
import CaramelFrappe from "../assets/coldcoffee/CaramelFrappe.png";

function ColdCoffee(){
  return(
    <section id="ColdCoffee" className="ProductSection">

      <h2>Cold Coffee</h2>

      <div className="ProductContainer">

        <div className="ProductCard">
          <img src={IcedLatte} alt="Iced Latte" />
          <div className="CardContent">
            <h3>Iced Latte</h3>
            <p>Smooth chilled milk coffee</p>
            <span>₹190</span>
            <button>Order Now</button>
          </div>
        </div>

        <div className="ProductCard">
          <img src={ColdBrew} alt="Cold Brew" />
          <div className="CardContent">
            <h3>Cold Brew</h3>
            <p>Slow brewed refreshing coffee</p>
            <span>₹220</span>
            <button>Order Now</button>
          </div>
        </div>

        <div className="ProductCard">
          <img src={ChocoFrappe} alt="Chocolate Frappe" />
          <div className="CardContent">
            <h3>Choco Frappe</h3>
            <p>Chocolate ice blended coffee</p>
            <span>₹240</span>
            <button>Order Now</button>
          </div>
        </div>

        <div className="ProductCard">
          <img src={CaramelFrappe} alt="Caramel Frappe" />
          <div className="CardContent">
            <h3>Caramel Frappe</h3>
            <p>Caramel flavored iced coffee</p>
            <span>₹250</span>
            <button>Order Now</button>
          </div>
        </div>

      </div>

    </section>
  )
}

export default ColdCoffee;