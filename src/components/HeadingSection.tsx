import React from "react"

const HeadingSection = () => {
  return (
    <>
      <div className="row pt-md pb-md ">
        <div
          className={"col-xs-12 col-sm-6 is-flex flex-column content-center "}
        >
          <div className="pt-50 p-20">
            <div className="barmini mb-16"></div>
            <div className="h5 pb-16">
              <em>{sub}</em>
            </div>
            <div className="fluid-1-b mb-16">{heading}</div>
            <p className="p1">{text}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeadingSection
