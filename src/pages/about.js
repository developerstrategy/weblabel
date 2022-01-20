import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Hero from "../components/Hero"
import MainSection from "../components/MainSection"
import TextImage from "../components/TextImage"
import image from "../../static/assets/images/tema2/benefit1.jpg"
import image1 from "../../static/assets/images/tema2/benefit2.jpg"
import image2 from "../../static/assets/images/tema2/benefit3.jpg"
import Partners from "../components/Partners"
import ContactSection from "../components/ContactSection"
import Footer from "../components/footer"
const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
        frontmatter {
          title
          subtitle
          thumbnail
          incino_title
          incino_description_title
          incino_description
          incino_thumbnail

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
  const word = content.incino_title.split(" ")

  return (
    <>
      <Hero
        heading={content.title}
        text={content.subtitle}
        bgImage={content.thumbnail}
        button={false}
      />
      <MainSection
        firstHeading={word.slice(0, -1).join(" ")}
        secondHeading={word[word.length - 1]}
        subHeading={content.incino_description_title}
        firstText={content.incino_description}
        image={content.incino_thumbnail.replace("/assets/images/", "")}
      />
      {content.beneficos.map((item, index) => (
        <TextImage
          sub={item.beneficios_subtitulo}
          heading={item.beneficios_titulo}
          text={item.beneficios_description}
          image={
            item.proyecto_imagen
              ? item.proyecto_imagen.replace("/assets/images/", "")
              : ""
          }
          reverse={index % 2 === 0 ? false : true}
        />
      ))}
      <Partners
        title={content.marcas_titulo}
        subTitle={content.marcas_subtitulo}
        images={content.Marcas}
      />
      <ContactSection />
      <Footer />
    </>
  )
}

export default About
