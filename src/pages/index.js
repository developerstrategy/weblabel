import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import "../../scss/style.scss"
import "../../scss/components/header2.scss"
import Footer from "../components/footer"
import Hero from "../components/Hero"
import MainSection from "../components/MainSection"
import Portfolio from "../components/homepage/Portfolio"
import TextSection from "../components/TextSection"
import TextImage from "../components/TextImage"
import Partners from "../components/Partners"
import LatestNews from "../components/LatestNews"
import OurServices from "../components/OurServices"
import ContactSection from "../components/ContactSection"

const Index = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      markdownRemark(fileAbsolutePath: { regex: "/homepage.md/" }) {
        frontmatter {
          seo_title
          seo_description
          seo_robots
          title
          subtitle
          thumbnail
          inicio_title
          inicio_description_title
          inicio_description
          inicio_thumbnail
          proyecto_titulo
          listitems {
            proyecto_imagen
          }
          bloque_titulo
          bloque_description
          beneficos {
            proyecto_imagen
            beneficios_subtitulo
            beneficios_titulo
            beneficios_description
          }
          marcas_subtitulo
          marcas_titulo
          Marcas {
            marcas_imagen
          }
        }
      }
    }
  `)

  const content = data.markdownRemark.frontmatter
  const word = content.inicio_title.split(" ")

  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        ></script>
      </Helmet>
      {content.seo_title}
      {content.seo_description}
      {content.seo_robots}
      <Hero
        heading={content.title}
        text={content.subtitle}
        bgImage={content.thumbnail}
        button={true}
      />
      <MainSection
        firstHeading={word.slice(0, -1).join(" ")}
        secondHeading={word[word.length - 1]}
        subHeading={content.inicio_description_title}
        firstText={content.inicio_description}
        image={content.inicio_thumbnail.replace("/assets/images/", "")}
      />
      <Portfolio title={content.proyecto_titulo} images={content.listitems} />
      <TextSection
        firstHeading={content.bloque_titulo.split(" ").slice(0, -1).join(" ")}
        secondHeading={
          content.bloque_titulo.split(" ")[
            content.bloque_titulo.split(" ").length - 1
          ]
        }
        description={content.bloque_description}
      />
      {content.beneficos.map((item, index) => (
        <TextImage
          sub={item.beneficios_subtitulo}
          heading={item.beneficios_titulo}
          text={item.beneficios_description}
          image={item.proyecto_imagen.replace("/assets/images/", "")}
          reverse={index % 2 === 0 ? false : true}
        />
      ))}

      <Partners
        title={content.marcas_titulo}
        subTitle={content.marcas_subtitulo}
        images={content.Marcas}
      />
      <LatestNews />
      <OurServices />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Index
