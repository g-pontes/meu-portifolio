import React from "react"
import { useEffect } from "react";
import Aos from "aos";
import "./index.css"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
import Footer from "./components/footer/Footer"
import Services from "./components/services/Services"
import Portifolio from "./components/portifolio/Portifolio"

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
    <Header />
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Services />
      <Portifolio />
      <Footer />
    </main>
    </>
  )
}

export default App