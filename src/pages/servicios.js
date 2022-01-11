import React from "react"
import Header from "../components/header"
import OurServices from "../components/OurServices"
import ServiciosMain from "../components/ServiciosMain"
import ContactSection from "../components/ContactSection"
import Footer from "../components/footer"

const Servicios = () => {
  return (
    <>
      <Header offset="0" />
      <ServiciosMain />
      <OurServices />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Servicios
