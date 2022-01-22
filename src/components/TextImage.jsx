import React from "react"
import Image from "../components/Image"

const TextImage = ({ sub, heading, text, image, reverse, link }) => {
  return (
    <>
      <section className="bg-cream">
        <div className="container">



          
          <div
            className="row pt-md pb-md small-bg-white"
            style={
              reverse
                ? { flexDirection: "row-reverse " }
                : { flexDirection: "row "  }
            }
          >
            <div className={"col-xs-12 col-sm-6 is-flex flex-column content-center " + (  reverse ?  "half-white-bg-r " :  "half-white-bg "   ) }>
              <div className="barmini mb-16"></div>
              <div className="h5 pb-16">
                <em>{sub}</em>
              </div>
              <div className="fluid-1-b mb-16">{heading}</div>
              <p className="p1">{text}</p>
              {link && (
                <div className="col-sm-6 mt-20" style={{ paddingLeft: "0px" }}>
                  <button class="btn btn-invert btn--mini btn-secondary  ">
                    LINK{" "}
                  </button>
                </div>
              )}
            </div>
            <div className="col-xs-12 col-sm-6 img-md text-center">
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
      </section>
    </>
  )
}

export default TextImage
