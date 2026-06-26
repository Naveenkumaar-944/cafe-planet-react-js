import { useState } from "react";
import source from "../assets/CPlogo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="CoffeeHeader">
      <nav className="CoffeeNav">

        <div className="CoffeeBrand">
          <img src={source} className="CoffeeLogo" alt="logo" />
          <h2 className="NavH2">Cafe Planet</h2>
        </div>

        {/* Hamburger */}

        <div
          className="MenuIcon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <ul className={menuOpen ? "CoffeeUl active" : "CoffeeUl"}>

          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>

          <li className="CoffeeDroper">
            <a href="#products">Products</a>

            <ul className="CoffeeDropNav">
              <li><a href="#hot-coffee">Hot Coffee</a></li>
              <li><a href="#cold-coffee">Cold Coffee</a></li>
              <li><a href="#signature-drinks">Signature Drinks</a></li>
              <li><a href="#tea">Tea</a></li>
              <li><a href="#bakery-items">Bakery Items</a></li>
              <li><a href="#snacks">Snacks</a></li>
            </ul>
          </li>

          <li><a href="#blogs">Blogs</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>

        </ul>

      </nav>
    </header>
  );
}

export default Header;