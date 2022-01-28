import React from "react"
import Image from "./Image"
const ServiciosMain = ({ title, sub, image }) => {
  return (
    <>
      <section className="pt-big">
        <div className="container">
          <div className="row pb-50">
            <div className="col-xs-10 col-sm-7 mb-20">
              <div className="fluid-1-b mb-50">{title}</div>
              <div className="fluid-3-b mb-20">{sub}</div>
              <div className="barx"></div>
            </div>
            <div className="col-xs-6 col-sm-5">
              <Image width="100%" name={image} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiciosMain
