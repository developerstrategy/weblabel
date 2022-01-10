import React from "react"
import ContactSection from "../components/ContactSection"
import Footer from "../components/footer"
import Header from "../components/header"

const Contact = () => {
  return (
    <>
      <Header offset="0" />
      <ContactSection />
      <div class="container-fluid">
        <div class="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11972.865782886653!2d2.15484835!3d41.3911056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1640939821039!5m2!1ses!2ses"
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
