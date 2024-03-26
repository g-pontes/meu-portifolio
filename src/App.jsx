import React from "react"
import "./index.css"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
import Footer from "./components/footer/Footer"
import Services from "./components/services/Services"

const App = () => {
  return (
    <>
    <Header />
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Services />
      <Footer />
    </main>
    </>
  )
}

export default App