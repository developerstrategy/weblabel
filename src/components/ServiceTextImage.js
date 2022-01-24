import React from "react"
import Image from "../components/Image"

const ServiceTextImage = ({ sub, heading, text, image, reverse, link }) => {
  return (
    <>
      <section class=" pt-md pb-md">
        <div class="container">
          <div class="row pb-20">
            <div class="col-xs-4"></div>
          </div>
          <div class="row sm:reverse">
            <div class="col-xs-12 col-sm-6">
              <div class="fluid-1-b "> {heading} </div>
              <br />
              <div class="row">
                <div class="col-xs-2 col-sm-2 ">
                  <div class="barx mt-10"></div>
                </div>
                <div class="col-xs-10 col-sm-10 mb-20">
                  {" "}
                  <p class="h3 mb-16">{sub}</p>
                  <p class="p1">{text} </p>
                  <br />
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 mb-20">
              <div class=" rat-1-1">
                <div class="rat-content   img-container">
                  {image && (
                    <div className="rat-32-11">
                      <div className="rat-content">
                        <Image name={image} />
                      </div>
                    </div>
                  )}{" "}
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
