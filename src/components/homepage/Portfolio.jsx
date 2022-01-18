import React, { useEffect } from "react"
import Swiper from "swiper/bundle"
// import Swiper styles
import "swiper/css"
import project1 from "../../../static/assets/images/tema2/project1.jpg"
import project2 from "../../../static/assets/images/tema2/project2.jpg"
import project3 from "../../../static/assets/images/tema2/project3.jpg"
import project4 from "../../../static/assets/images/tema2/project4.jpg"

const Portfolio = ({ title }) => {
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
  return (
    <>
      <section className="bg-cream pt-md pb-md">
        <div className="container mb-16  ">
          <div className="row ">
            <div className=" col-xs-12 col-sm-6 is-flex flex-column content-center  ">
              <div className="fluid-1-b mb-20  ">{title} </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-xs-12">
              <div className="swiper">
                <div className="swiper-button-prev1">
                  {" "}
                  <svg
                    width="13"
                    height="15"
                    viewBox="0 0 13 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L1 7M1 7L7 13.75M1 7L12.25 7"
                      stroke="#ffffff"
                    ></path>
                  </svg>{" "}
                </div>
                <div className="swiper-button-next1">
                  {" "}
                  <svg
                    width="13"
                    height="15"
                    viewBox="0 0 13 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L1 7M1 7L7 13.75M1 7L12.25 7"
                      stroke="#ffffff"
                    ></path>
                  </svg>{" "}
                </div>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src={project1} alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={project2} alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={project3} alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={project4} alt="" />
                  </div>
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
