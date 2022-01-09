import React from "react"
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
  return (
    <>
      <Hero
        heading="About Us"
        text="Ayudamos a las marcas a generar conciencia y aumentar las ventas."
        button={false}
      />
      <MainSection
        firstHeading="About"
        secondHeading="US"
        subHeading="Un enfoque del marketing digital centrado en el ser humano."
        firstText="Somos socios de marketing digital liderados por marcas con sede en Tāmaki Makaurau, Auckland. Brindamos un enfoque centrado en el ser humano para el marketing digital, creando e implementando estrategias digitales a medida que amplifican la visión de una marca al tiempo que alcanzan los objetivos comerciales"
        secondText="Nos apasiona hacer crecer marcas con propósito de una manera considerada y nos encanta conectarnos con cualquiera que comparta esta visión."
      />
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
        link={true}
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
      <ContactSection />
      <Footer />
    </>
  )
}

export default About
