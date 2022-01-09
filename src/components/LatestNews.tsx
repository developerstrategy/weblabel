import React from "react"

const LatestNews = () => {
  return (
    <>
      <section className="bg-cream pt-md pb-md">
        <div className="container">
          <div className="row pb-50">
            <div className="col-xs-6 mb-20">
              <div className="barmini mb-16"></div>
              <div className="text-16-r pb-40">
                <em>Nuestras noticias</em>
              </div>
              <div className="fluid-1-b">
                Últimas <br />
                Noticias
              </div>
            </div>
            <div className="col-xs-6 align-bottom text-right is-flex content-end mb-20">
              <a href="blog.html">
                <button className="btn btn-primary btn--small">See all</button>
              </a>
            </div>
          </div>
          <div className="row scroll-nat scroll-nat-2">
            <div className="col-xs-4">
              <a href="blog2.html">
                <div className="mb-16">
                  <div className="rat-2-1">
                    <div className="rat-content img-container">
                      <img
                        width="100%"
                        alt="imagenes"
                        src="assets/images/tema2/news1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="text-12-r mb-16">
                  <em>Category</em>
                </div>
                <div className="fluid-4-b mb-20">
                  Compra un coche usado tan simple como comprarlo
                </div>
                <div className="text-14-r mb-20">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  molestiae voluptate odit natus et modi dolorum soluta
                  excepturi nam ...
                </div>
                <div className="text-14-r">
                  <a className="text-date" href="">
                    {" "}
                    Date: 12.12.21
                  </a>
                </div>
              </a>
            </div>
            <div className="col-xs-4">
              <a href="blog2.html">
                <div className="mb-16">
                  <div className="rat-2-1">
                    <div className="rat-content img-container">
                      <img
                        width="100%"
                        alt="imagenes"
                        src="assets/images/tema2/news1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="text-12-r mb-16">
                  <em>Category</em>
                </div>
                <div className="fluid-4-b mb-20">
                  Compra un coche usado tan simple como comprarlo
                </div>
                <div className="text-14-r mb-20">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  molestiae voluptate odit natus et modi dolorum soluta
                  excepturi nam ...
                </div>
                <div className="text-14-r">
                  <a className="text-date" href="">
                    {" "}
                    Date: 12.12.21
                  </a>
                </div>
              </a>
            </div>
            <div className="col-xs-4">
              <a href="blog2.html">
                <div className="mb-16">
                  <div className="rat-2-1">
                    <div className="rat-content img-container">
                      <img
                        width="100%"
                        alt="imagenes"
                        src="assets/images/tema2/news1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="text-12-r mb-16">
                  <em>Category</em>
                </div>
                <div className="fluid-4-b mb-20">
                  Compra un coche usado tan simple como comprarlo
                </div>
                <div className="text-14-r mb-20">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  molestiae voluptate odit natus et modi dolorum soluta
                  excepturi nam ...
                </div>
                <div className="text-14-r">
                  <a className="text-date" href="">
                    {" "}
                    Date: 12.12.21
                  </a>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LatestNews
