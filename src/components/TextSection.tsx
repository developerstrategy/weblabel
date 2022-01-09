import React from "react"

const TextSection = () => {
  return (
    <>
      <section className=" pt-md pb-md">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 is-flex">
              <div className="row ">
                <div className=" col-xs-12 col-sm-6 is-flex flex-column content-center  ">
                  <div className="fluid-1-b  ">
                    Nuestra filosofía <em>Humana</em>
                  </div>
                </div>
                <div className=" col-xs-12 col-sm-6 is-flex flex-column content-center ">
                  <br />
                  <p className="p1">
                    {" "}
                    «Los ingredientes frescos y los sabores puros y desnudos son
                    de suma importancia para nosotros. Al mismo tiempo, queremos
                    brindar una experiencia gastronómica única que lleve a Our
                    huéspedes más allá de su zona de confort ».{" "}
                  </p>
                  <br /> - Chef Nicolai Ellitsgaard
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
