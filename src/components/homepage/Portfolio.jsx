import React, { useEffect, useState } from "react"
import Swiper from "swiper/bundle"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
import "swiper/css"
import { SRLWrapper } from "simple-react-lightbox"

const Portfolio = ({ title, images }) => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "horizontal",
      slidesPerView: 5,
      spaceBetween: 10,

      loop: true,
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    })
  }, [])

  const [showLightBox, SetShowLightBox] = useState(false)
  const imageRef = React.useRef("")
  return (
    <>
      <section className="bg-cream pt-md pb-md">
        <div className="container mb-16  ">
          <div className="row ">
            <div className=" col-xs-12 col-sm-6 is-flex flex-column content-center  ">
              <div className="fluid-1-b mb-16  ">{title} </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-xs-12">
              <div className="swiper">
                <div className="swiper-button-prev1">
                  
                  <svg
                    width="13"
                    height="15"
                    viewBox="0 0 13 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L1 7M1 7L7 13.75M1 7L12.25 7"
                      stroke=""
                    ></path>
                  </svg>
                </div>
                <div className="swiper-button-next1">
                  
                  <svg
                    width="13"
                    height="15"
                    viewBox="0 0 13 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L1 7M1 7L7 13.75M1 7L12.25 7"
                      stroke=""
                    ></path>
                  </svg>
                </div>

                <div className="swiper-wrapper">
                  {images.map(image => (
                    <>
                      <div className="swiper-slide">
                        <img
                          src={image.proyecto_imagen.proyecto_texto}
                          alt=""
                          onClick={() => {
                            SetShowLightBox(!showLightBox)
                            imageRef.current = image.proyecto_imagen
                          }}
                        />
                      </div>
                      {showLightBox && (
                        <Dialog>
                          <img src={imageRef.current} alt="" />
                          <button
                            type="button"
                            onClick={() => SetShowLightBox(false)}
                          >
                            Clos
                          </button>
                        </Dialog>
                      )}
                    </>
                  ))}
                </div>

                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
