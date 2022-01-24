import React from "react"
import ContactSection from "../components/ContactSection"
import Footer from "../components/footer"
import Header from "../components/header"
import Portfolio from "../components/homepage/Portfolio"
import TextImage from "../components/TextImage"

const Service = () => {
  return (
    <>
      <Header offset="0" />
      <TextImage />
      <Portfolio />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Service
