import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import OurServices from "../components/OurServices"
import ServiciosMain from "../components/ServiciosMain"
import ContactSection from "../components/ContactSection"
import Footer from "../components/footer"

const Servicios = () => {
  const data = useStaticQuery(graphql`
    query ServiciosQuery {
      markdownRemark(fileAbsolutePath: { regex: "/servicios.md/" }) {
        frontmatter {
          servicios_titulo
          servicios_subtitulo
          servicios_imagen
        }
      }
    }
  `)
  const content = data.markdownRemark.frontmatter

  return (
    <>
      <Header offset="0" />
      <ServiciosMain
        title={content.servicios_titulo}
        sub={content.servicios_subtitulo}
        image={content.servicios_imagen.replace("/assets/images/", "")}
      />
      <OurServices />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Servicios
