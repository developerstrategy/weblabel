import React from "react"
import ContactSection from "../components/ContactSection"
import Footer from "../components/footer"
import Header from "../components/header"
import { useStaticQuery, graphql } from "gatsby"

const LegalCookies = () => {

  const data = useStaticQuery(graphql`
  query LegalCookiesSectionQuery {
    markdownRemark(fileAbsolutePath: { regex: "/contacto.md/" }) {
      frontmatter {
        contacto_titulo
        contacto_subtitulo
        direction
        direction_link
        email_titulo
        email
        telefono_titulo
        telefono
        whatsapp_titulo
        whatsapp
        contacta_pregunta
        check_acepta_la_politica
        contacta_cta
        website
        empresa_corto
        empresa_legal
        empresa_dni
        empresa_legal_direccion
      }
    }
  }
`)


const content = data.markdownRemark.frontmatter
  return (
    <>
      <Header offset="0" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xs-12"></div>
          </div>
        </div>
      </section>
      <section className=" pt-big ">
        <div className="container-3">
          <div className="row pb-20">
            <div className="col-xs-12 align-center">
              <div className="fluid-1-b mb-50  "> Política de cookies </div>
              <div className="text-16-r pb-16   ">
                
                <i>
                  
                  <span className="variable"> {content.empresa_corto} </span>
                </i>
              </div>
              <div className="barx "></div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="p1  p-content">
                
                En cumplimiento con lo dispuesto en el artículo 22.2 de la Ley
                34/2002, de 11 de julio, de Services de la Sociedad de la
                Información y de Comercio Electrónico,
                <span className="variable"> {content.empresa_corto}</span>, titular y
                propietario del website
                <span className="variable"> {content.website}, </span>
                 le informa en esta sección la política de recogida y tratamiento
                de cookies propias y de terceros con fines de Análisis,
                Personalización, de Marketing y Técnicos en dicho website. Las
                cookies son pequeños archivos de texto que las páginas web
                almacenan en el navegador del usuario que las visita para hacer
                más eficiente la experiencia del usuario. Esta página web
                utiliza cookies propias y de terceros para personalizar el
                contenido y los anuncios, ofrecer funciones de redes sociales y
                analizar el tráfico. Además, compartimos información sobre el
                uso que haga del sitio web con Our partners de redes sociales,
                publicidad y análisis web, quienes pueden combinarla con otra
                información que les haya proporcionado o que hayan recopilado a
                partir del uso que haya hecho de sus servicios. Algunas cookies
                son esenciales para el funcionamiento del sitio, por ejemplo el
                buscador incorporado. Otras se usan para para recopilar
                información con fines estadísticos y de uso de la web. El uso
                del website implica la aceptación del uso de cookies para los
                fines y usos que se citan en la presente Política de Cookies. En
                este enlace puede consultar cómo usa Google los datos cuando
                utilizas las aplicaciones o los sitios web sus partners. USO DE
                COOKIES SEGÚN LA GESTIÓN Y EL TIEMPO ACTIVAS Esta página web
                utiliza servicios de terceros para recopilar información con
                fines estadísticos y de uso de la web. En concreto, Cookies
                propias, Cookies de terceros, de sesión y activas para fines de
                Análisis, Personalización, de Marketing y Técnicos. La siguiente
                información de los tipos de cookies que contiene esta página
                ayuda a comprender mejor las funciones que hacen posible: Según
                el tiempo de permanencia en el navegador, se dividen en: Cookies
                de sesión: Son cookies temporales que permanecen en el espacio
                de cookies de su equipo hasta que cierra el navegador, por lo
                que ninguna queda registrada en el disco del usuario. La
                información obtenida por medio de estas cookies sirve para hacer
                posible la gestión operativa con cada uno de los usuarios que
                está accediendo de forma simultánea a la web. Cookies
                persistentes: Son cookies que permanecen almacenadas en el
                espacio de cookies de su equipo una vez cerrado el navegador, y
                que volverá a consultar dicha página web la próxima vez que
                acceda a ella para recordar información que facilite la
                navegación (acceder directamente al servicio sin necesidad de
                hacer el proceso de login) o la prestación de un servicio
                comercial (ofrecer aquellos productos o servicios relacionados
                con anteriores visitas). Además, las cookies intercambiadas al
                navegar por una página web pueden ser: Cookies de origen o
                propias: Son cookies generadas por la propia página web que se
                está visitando. Cookies de terceros: Son cookies que se reciben
                al navegar por esa página web, pero que han sido generadas por
                un tercer servicio que se encuentra hospedado en ella. Un
                ejemplo puede ser la cookie empleada por un anuncio o banner de
                publicidad que se encuentra en la página web que visitamos. Otro
                puede ser la cookie empleada por un contador de visitantes
                contratado por la página web que visitamos. SEGÚN SU FINALIDAD
                En virtud de su finalidad, utilizamos cookies de Análisis,
                Personalización, de Marketing y Técnicas (o necesarias):
                Necesarias: Permiten al usuario la navegación a través de una
                página web, plataforma o aplicación y la utilización de las
                diferentes opciones o servicios que en ella existan como, por
                ejemplo, controlar el tráfico y la comunicación de datos,
                identificar la sesión, acceder a partes de acceso restringido,
                recordar los elementos que integran un pedido, realizar el
                proceso de compra de un pedido, realizar la solicitud de
                inscripción o participación en un evento, utilizar elementos de
                seguridad durante la navegación, almacenar contenidos para la
                difusión de videos o sonido o compartir contenidos a través de
                redes sociales.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 ">
              <div className="p-content">
                <hr className="mt-50" />
                <ul className="list-clear list-inline text-12-r">
                  <li>
                    <a href=""> keyword </a>
                  </li>
                  <li>
                    <a href=""> keyword </a>
                  </li>
                  <li>
                    <a href=""> keyword </a>
                  </li>
                  <li>
                    <a href=""> keyword </a>
                  </li>
                  <li>
                    <a href=""> keyword </a>
                  </li>
                  <li>
                    <a href=""> keyword </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid height-sm ">
          <div className="row">
            <div className="col-xs-12">
              <hr />
              <div className="container">
                <div className="row pt-50 pb-50">
                  <div className="col-xs-6">
                    <div>
                      <div className="arrowpost">
                        <svg
                          className="turn"
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.854364 3.56131L18.6289 21.4424L2.26559 21.3935L2.25322 25.5332L25.6852 25.6032L25.7552 2.1712L21.6156 2.15883L21.5667 18.5222L3.79212 0.641061L0.854364 3.56131Z"
                            fill="#fb263b"
                          ></path>
                        </svg>
                      </div>
                      <div className="fluid-3-b">Anterior Post</div>
                      <p className="p1">
                        
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-6 text-right">
                    <div className="arrowpost">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.854364 3.56131L18.6289 21.4424L2.26559 21.3935L2.25322 25.5332L25.6852 25.6032L25.7552 2.1712L21.6156 2.15883L21.5667 18.5222L3.79212 0.641061L0.854364 3.56131Z"
                          fill="#fb263b"
                        ></path>
                      </svg>
                    </div>
                    <div className="fluid-3-b"> Next Post </div>
                    <p className="p1">
                      
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>
      <ContactSection />
      <Footer />
    </>
  )
}

export default LegalCookies
