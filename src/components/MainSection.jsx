import React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const MainSection = ({
  firstHeading,
  secondHeading,
  subHeading,
  firstText,
  secondText,
}) => {
  return (
    <>
      <section data-scroll-container className=" pt-md pb-md">
        <div data-scroll-section className="container  ">
          <div className="row   ">
            <div className="col-xs-12 col-sm-7 pb-md">
              <div className="row">
                <div className="col-xs-12 mb-50 ">
                  <div data-scroll data-scroll-speed="3" className="fluid-1-b">
                    {firstHeading} <br /> <em>{secondHeading}</em>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-2 col-sm-2">
                  <div className="barx mt-10"></div>
                </div>
                <div className="col-xs-10 col-sm-10">
                  <p className="h3 mb-16">{subHeading} </p>
                  <p className="p1">{firstText}</p>
                  <br />
                  <p className="p1">{secondText}</p>
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
