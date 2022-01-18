import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ContactSection from "../components/ContactSection"
import Footer from "../components/footer"
import Header from "../components/header"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query ContactoPage {
      markdownRemark(fileAbsolutePath: { regex: "/contacto.md/" }) {
        frontmatter {
          contacta_map
        }
      }
    }
  `)
  const content = data.markdownRemark.frontmatter

  return (
    <>
      <Header offset="0" />
      <ContactSection />
      <div class="container-fluid">
        <div class="contact-map">
          <iframe
            src={content.contacta_map}
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
