import { useState } from 'react'
import './App.css'
import Header from "./Components/Header.jsx";
import Hero from './Components/Hero.jsx';
import About from './Components/About.jsx';
import Products from './Components/Products.jsx';
import ColdCoffee from './Components/ColdCoffee.jsx';
import SignatureDrinks from './Components/SignatureDrinks.jsx';
import Tea from './Components/Tea.jsx';
import Bakery from './Components/Bakery.jsx';
import Snacks from './Components/Snacks.jsx';
import Blogs from './Components/Blogs.jsx';
import Gallery from './Components/Gallery.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';

function App() {

  return (
    <>
    <Header />
    <Hero />
    <About />
    <Products />
    <ColdCoffee />
    <SignatureDrinks />
    <Tea />
    <Bakery />
    <Snacks />
    <Blogs />
    <Gallery />
    <Contact />
    <Footer />
    </>
  )
}

export default App
