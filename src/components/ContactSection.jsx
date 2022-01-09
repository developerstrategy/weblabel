import React from "react"

const ContactSection = () => {
  return (
    <>
      <section className="pt-md pb-md">
        <div className="container pt-md">
          <div className="row pb-50">
            <div className="col-xs-12 col-sm-6">
              <div className="barmini mb-16"></div>
              <div className="text-16-r pb-40">
                <em>Contacta con nosotros </em>
              </div>
              <div className="fluid-1-b mb-16">
                Contacta <br />
                con Nosotros
              </div>
              <p className="p1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                quam asperiores nisi minima totam, ipsum sequi amet? Ipsum,
                placeat iure quasi architecto asperiores excepturi iusto, illo
                eum error inventore accusamus?
              </p>
            </div>
          </div>
          <div className="row mb-50">
            <div className="col-xs-12 col-sm-4">
              <div className="box mini-box p-20 mb-16 bg-cream">
                <h5 className="h3 mb-20">Dirección</h5>
                <p className="p1">
                  <span className="variable">
                    Carrer de Josep Anselm Clavé, 35, 08950 Esplugues de
                    Llobregat, Barcelona
                  </span>
                </p>
                <a className="mt-20 link5" href="">
                  {" "}
                  See map
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="box mini-box p-20 mb-16 bg-cream">
                <h5 className="h3 mb-20">Email</h5>
                <p className="p1">
                  <span className="variable">info@domain.com</span>
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="box mini-box p-20 mb-16 bg-cream">
                <h5 className="h3">Telephone</h5>
                <p className="p1">
                  <span className="variable">+34 178 717 717 </span>
                </p>
                <div className="mb-20"></div>
                <h5 className="h3">whatsapp</h5>
                <p className="p1">
                  <span className="variable">
                    <a href="whatsapp://send?text=Hello World!&phone=+9198********1">
                      Ping me on WhatsApp
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-7 col-sm-4">
              <h3 className="fluid-2-b mb-16">¿Tienes alguna duda?</h3>
              <div className="barx mt-10 mb-20"></div>
            </div>
            <div className="col-xs-12 col-sm-8">
              <div className="row mb-16">
                <div className="col-xs-12">
                  <input type="text" className="input" placeholder="Nombre" />
                </div>
              </div>
              <div className="row mb-16">
                <div className="col-xs-12">
                  <input type="text" className="input" placeholder="Email" />
                </div>
              </div>
              <div className="row mb-16">
                <div className="col-xs-12">
                  <input type="text" className="input" placeholder="Nombre" />
                </div>
              </div>
              <div className="row mb-20">
                <div className="col-xs-12">
                  <textarea
                    className="input textarea"
                    id="comment"
                    name="comment"
                    cols="45"
                    rows="8"
                    aria-required="true"
                    placeholder="Write your comment here..."
                  ></textarea>
                </div>
              </div>
              <div className="row mb-50">
                <div className="col-xs-12">
                  <div className="checkbox-item-text">
                    <div className="checkbox-item">
                      <input id="checkbox_0" type="checkbox" />
                      <label htmlFor="checkbox_0">
                        <i className="icon">
                          <svg width="16" height="16" viewBox="0 0 16 16">
                            <g strokeWidth="1" fill="#000000" stroke="#000000">
                              <polyline
                                fill="none"
                                stroke="#000000"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                points="1,9 5,13 15,3 "
                              ></polyline>
                            </g>
                          </svg>
                        </i>
                      </label>
                    </div>
                    <span className="text-14-r">
                      Checkbox básico ,
                      <a className="link4" href="">
                        {" "}
                        politica privacidad
                      </a>
                    </span>
                  </div>
                  <span className="is-error text-14-r">
                    You need check this Error checkbox
                  </span>
                </div>
              </div>
              <div className="row mb-50">
                <div className="col-xs-12">
                  <div className="btn btn-primary btn--medium">SEND</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid"></div>
      </section>
    </>
  )
}

export default ContactSection
