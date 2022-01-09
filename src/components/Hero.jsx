import React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import Header from "./header"
import bg from "../assets/images/home.jpg"

const Hero = () => {
  const image = getImage("../assets/images/home.jpg")

  return (
    <>
      <section>
        <Header />
        {/* <!-- <div className="container-fluid bg-dark" style="background-image: url( 'assets/images/tema2/3.jpg' );  background-size: cover; background-position: bottom;  "  > --> */}
        <div className=" bg-dark">
          <div className="cover__bg-item">
            <div className="cover__video">
              {/* <!-- <video src="assets/video/cover.mp4" autoplay="" muted="" loop="" data-video=""
                            poster="assets/video/cover.mp4"></video> --> */}

              <img
                src={bg}
                alt="Mars Curiosity Rover takes an excellent selfie."
                srcset="
                ../assets/images/tema2/home.jpg  1120w,
                ../assets/images/tema2/home.jpg 768w,
                ../assets/images/tema2/home.jpg  400w"
                sizes="
     (min-width: 40em) calc(66.6vw - 4em),
     100vw"
              />
            </div>
          </div>
          <div className="row height-full ">
            <div className="col-xs-12 is-flex">
              <div className="container is-flex">
                <div className="row ">
                  <div className=" col-xs-8 col-md-6 is-flex flex-column content-center  ">
                    <div className="fluid-1-b   ">
                      Cree Fantasticos sitios web{" "}
                    </div>
                    <br />
                    <p className="p1">
                      Ayudamos a las marcas a generar conciencia y aumentar las
                      ventas.{" "}
                    </p>
                    <br />
                    <div className="btn btn-phantom btn--small">
                      Aprende más
                    </div>
                  </div>
                  <div className="col-xs-4  col-md-6 "></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bar-container bg-dark">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-4">
                <div className="text-16-b"> 01 SETTINGS</div>
                <p> First fantastic characteristic</p>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4">
                <div className="text-16-b"> 02 SETTINGS </div>
                <p> Second fantastic characteristic</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
