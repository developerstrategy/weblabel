import React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const MainSection = () => {
  return (
    <>
      <section data-scroll-container className=" pt-md pb-md">
        <div data-scroll-section className="container  ">
          <div className="row   ">
            <div className="col-xs-12 col-sm-7 pb-md">
              <div className="row">
                <div className="col-xs-12 mb-50 ">
                  <div data-scroll data-scroll-speed="3" className="fluid-1-b">
                    {" "}
                    Human <br /> <em>Marketing</em>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-2 col-sm-2">
                  <div className="barx mt-10"></div>
                </div>
                <div className="col-xs-10 col-sm-10">
                  <p className="h3 mb-16">
                    Un enfoque del marketing digital centrado en el ser humano.
                  </p>
                  <p className="p1">
                    {" "}
                    Somos socios de marketing digital liderados por marcas con
                    sede en Tāmaki Makaurau, Auckland. Brindamos un enfoque
                    centrado en el ser humano para el marketing digital, creando
                    e implementando estrategias digitales a medida que
                    amplifican la visión de una marca al tiempo que alcanzan los
                    objetivos comerciales.{" "}
                  </p>
                  <br />
                  <p className="p1">
                    {" "}
                    Nos apasiona hacer crecer marcas con propósito de una manera
                    considerada y nos encanta conectarnos con cualquiera que
                    comparta esta visión.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              data-scroll=""
              data-scroll-delay="0.1"
              data-scroll-speed="6"
              className="col-xs-12 col-sm-5"
            >
              <StaticImage
                src="../../static/assets/images/tema2/start.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainSection
