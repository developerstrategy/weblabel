import React from "react"
import { graphql, Link } from "gatsby"
import ContactSection from "../components/ContactSection"
import Footer from "../components/footer"
import Header from "../components/header"
import Portfolio from "../components/homepage/Portfolio"
import TextImage from "../components/TextImage"
import ServiceTextImage from "../components/ServiceTextImage"

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM ")
        path
        proyecto_titulo
        listitems {
          proyecto_imagen
        }
        beneficos {
          beneficios_imagen
          beneficios_subtitulo
          beneficios_titulo
          beneficios_description
        }
      }
    }
  }
`

const Service = props => {
  console.log(props)
  return (
    <>
      <Header offset="0" />
      {props.data.markdownRemark.frontmatter.beneficos.map((item, index) => (
        <ServiceTextImage
          sub={item.beneficios_subtitulo}
          heading={item.beneficios_titulo}
          text={item.beneficios_description}
          image={item.beneficios_imagen.replace("/assets/images/", "")}
          reverse={index % 2 === 0 ? false : true}
        />
      ))}

      <Portfolio
        title="Our Work"
        images={props.data.markdownRemark.frontmatter.listitems}
      />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Service
