import { useState } from "react";
import source from "../assets/CPlogo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="CoffeeHeader">
      <nav className="CoffeeNav">

        {/* Brand */}

        <div className="CoffeeBrand">
          <img src={source} className="CoffeeLogo" alt="Cafe Logo" />
          <h2 className="NavH2">Cafe Planet</h2>
        </div>

        {/* Mobile Menu Icon */}

        <div
          className="MenuIcon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>

        {/* Navbar */}

        <ul className={menuOpen ? "CoffeeUl active" : "CoffeeUl"}>

          <li>
            <a href="#hero" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#AboutSection" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>

          {/* Products Dropdown */}

          <li className="CoffeeDroper">
            <a href="#products">Products</a>

            <ul className="CoffeeDropNav">

              <li>
                <a href="#HotCoffee" onClick={() => setMenuOpen(false)}>
                  Hot Coffee
                </a>
              </li>

              <li>
                <a href="#ColdCoffee" onClick={() => setMenuOpen(false)}>
                  Cold Coffee
                </a>
              </li>

              <li>
                <a href="#SignatureDrinks" onClick={() => setMenuOpen(false)}>
                  Signature Drinks
                </a>
              </li>

              <li>
                <a href="#Tea" onClick={() => setMenuOpen(false)}>
                  Tea
                </a>
              </li>

              <li>
                <a href="#BakeryItems" onClick={() => setMenuOpen(false)}>
                  Bakery Items
                </a>
              </li>

              <li>
                <a href="#Snacks" onClick={() => setMenuOpen(false)}>
                  Snacks
                </a>
              </li>

            </ul>
          </li>

          <li>
            <a href="#blogs" onClick={() => setMenuOpen(false)}>
              Blogs
            </a>
          </li>

          <li>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>

        </ul>

      </nav>
    </header>
  );
}

export default Header;
