import React from "react"
import "../../scss/style.scss"
import "../../scss/components/header2.scss"
import Footer from "../components/footer"
import Hero from "../components/Hero"
import MainSection from "../components/MainSection"
import Portfolio from "../components/Portfolio"

const Index = () => {
  return (
    <>
      <Hero />
      <MainSection />
      <Portfolio />
      <Footer />
    </>
  )
}

export default Index
