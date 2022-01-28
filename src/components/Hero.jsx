import React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import Header from "./header"
import bg from "../assets/images/home.jpg"

const Hero = ({ heading, text, button, bgImage, video }) => {
  const image = getImage(bgImage)

  return (
    <>
      <section>
        <Header offset="100" />
        <div className="bg-dark">
          <div className="cover__bg-item">
            <div className="cover__video">
              {video ? (
                <video
                  src={video}
                  type="video/mp4"
                  muted
                  autoPlay={"autoplay"}
                  preLoad="auto"
                  loop
                />
              ) : (
                <img
                  src={bgImage}
                  sizes="
                 (min-width: 40em) calc(66.6vw - 4em),
                 100vw"
                />
              )}
              ) }
            </div>
          </div>
          <div className="row height-full ">
            <div className="col-xs-12 is-flex">
              <div className="container is-flex">
                <div className="row ">
                  <div className=" col-xs-8 col-md-6 is-flex flex-column content-center  ">
                    <div className="fluid-1-b   ">{heading}</div>
                    <br />
                    <p className="p1">{text}</p>
                    <br />
                    {button && (
                      <div className="btn btn-phantom btn--small">
                        Aprende más
                      </div>
                    )}
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
