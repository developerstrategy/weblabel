import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { getImage } from "gatsby-plugin-image"
import "../../scss/style.scss"
import "../../scss/components/header2.scss"
import image from "../../static/assets/images/tema2/benefit1.jpg"
import image1 from "../../static/assets/images/tema2/benefit2.jpg"
import image2 from "../../static/assets/images/tema2/benefit3.jpg"
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
          title
          subtitle
          thumbnail
          incino_title
          incino_description_title
          incino_description
          incino_thumbnail
        }
      }
    }
  `)

  const content = data.markdownRemark.frontmatter
  const word = content.incino_title.split(" ")

  return (
    <>
      <Helmet>
        {" "}
        <script
          type="text/javascript"
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        ></script>
      </Helmet>
      <Hero
        heading={content.title}
        text={content.subtitle}
        bgImage={content.thumbnail}
        button={true}
      />
      <MainSection
        firstHeading={word.slice(0, -1).join(" ")}
        secondHeading={word[word.length - 1]}
        subHeading={content.incino_description_title}
        firstText={content.incino_description}
        image={content.incino_thumbnail.replace("/assets/images/", "")}
      />
      <Portfolio />
      <TextSection />
      <TextImage
        sub="Los Beneficios"
        heading="Beneficios producto"
        text="Crear el plan de beneficios perfecto es posible. Encuentra la flexibilidad que necesitas y da a tus empleados el poder que se merecen."
        image=""
        reverse={false}
      />
      <TextImage
        sub="La experiencia"
        heading="La arquitectura"
        text={
          <>
            Rest ha sido diseñado con una consideración sensible para su
            contexto geográfico y vecinos acuáticos. La estructura está diseñada
            para integrarse completamente en su entorno marino a lo largo del
            tiempo, ya que la rugosidad del caparazón de hormigón funcionará
            como un arrecife artificial, dando la bienvenida a lapas y algas
            marinas para habitarlo.
            <br />
            Con los gruesos muros de hormigón contra la escarpada costa, la
            estructura está construida para resistir la presión y el impacto de
            las agitadas condiciones del mar.
          </>
        }
        image={image}
        reverse={true}
      />
      <TextImage
        sub="La experiencia"
        heading="La arquitectura"
        text={
          <>
            Rest ha sido diseñado con una consideración sensible para su
            contexto geográfico y vecinos acuáticos. La estructura está diseñada
            para integrarse completamente en su entorno marino a lo largo del
            tiempo, ya que la rugosidad del caparazón de hormigón funcionará
            como un arrecife artificial, dando la bienvenida a lapas y algas
            marinas para habitarlo.
            <br />
            Con los gruesos muros de hormigón contra la escarpada costa, la
            estructura está construida para resistir la presión y el impacto de
            las agitadas condiciones del mar.
          </>
        }
        image={image1}
        reverse={false}
      />{" "}
      <TextImage
        sub="La experiencia"
        heading="La arquitectura"
        text={
          <>
            Rest ha sido diseñado con una consideración sensible para su
            contexto geográfico y vecinos acuáticos. La estructura está diseñada
            para integrarse completamente en su entorno marino a lo largo del
            tiempo, ya que la rugosidad del caparazón de hormigón funcionará
            como un arrecife artificial, dando la bienvenida a lapas y algas
            marinas para habitarlo.
            <br />
            Con los gruesos muros de hormigón contra la escarpada costa, la
            estructura está construida para resistir la presión y el impacto de
            las agitadas condiciones del mar.
          </>
        }
        image={image2}
        reverse={true}
      />
      <Partners />
      <LatestNews />
      <OurServices />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Index
