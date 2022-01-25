import React from "react"
import Image from "./Image"
const ServiciosMain = ({ title, sub, image }) => {
  return (
    <>
      <section class="pt-big">
        <div class="container">
          <div class="row pb-50">
            <div class="col-xs-10 col-sm-7 mb-20">
              <div class="fluid-1-b mb-50">{title}</div>
              <div class="fluid-3-b mb-20">{sub}</div>
              <div class="barx"></div>
            </div>
            <div class="col-xs-6 col-sm-5">
              <Image width="100%" name={image} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiciosMain
