import React from "react"
import { Remarkable } from "remarkable"

const TextSection = ({ firstHeading, secondHeading, description }) => {
  var md = new Remarkable()

  return (
    <>
      <section className=" pt-md pb-md">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 is-flex">
              <div className="row ">
                <div className=" col-xs-12 col-sm-6 is-flex flex-column content-center  ">
                  <div className="fluid-1-b  ">
                    {firstHeading} <em>{secondHeading}</em>
                  </div>
                </div>
                <div className=" col-xs-12 col-sm-6 is-flex flex-column content-center ">
                  <br />
                  <p
                    className="p1"
                    dangerouslySetInnerHTML={{
                      __html: md.render(description),
                    }}
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  )
}

export default TextSection
