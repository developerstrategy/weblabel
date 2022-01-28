import React from "react"
import Image from "../components/Image"

const ServiceTextImage = ({ sub, heading, text, image, reverse, link }) => {
  return (
    <>
      <section className=" pt-md pb-md">
        <div className="container">
          <div className="row pb-20">
            <div className="col-xs-4"></div>
          </div>
          <div className="row sm:reverse">
            <div className="col-xs-12 col-sm-6">
              <div className="fluid-1-b "> {heading} </div>
              <br />
              <div className="row">
                <div className="col-xs-2 col-sm-2 ">
                  <div className="barx mt-10"></div>
                </div>
                <div className="col-xs-10 col-sm-10 mb-20">
                  
                  <p className="h3 mb-16">{sub}</p>
                  <p className="p1">{text} </p>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 mb-20">
              <div className=" rat-1-1">
                <div className="rat-content   img-container">
                  {image && (
                    <div className="rat-32-11">
                      <div className="rat-content">
                        <Image name={image} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceTextImage
