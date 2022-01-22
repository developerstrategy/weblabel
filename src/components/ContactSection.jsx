import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const ContactSection = () => {


  const data = useStaticQuery(graphql`
    query ContactSectionQuery {
      markdownRemark(fileAbsolutePath: { regex: "/contacto.md/" }) {
        frontmatter {
          contacto_titulo
          contacto_subtitulo
          direction
          direction_link
          email_titulo
          email
          telefono_titulo
          telefono
          whatsapp_titulo
          whatsapp
          contacta_pregunta
          check_acepta_la_politica
          contacta_cta
          website
          empresa_corto
          empresa_legal
          empresa_dni
          empresa_legal_direccion
        }
      }
    }
  `)

  const content = data.markdownRemark.frontmatter

  return (
    <>
      <section className="pt-md pb-md">
        <div className="container pt-md">
          <div className="row pb-50">
            <div className="col-xs-12 col-sm-5">
              <div className="barmini mb-16"></div>
              <div className="text-16-r pb-40">
                <em>{content.contacto_subtitulo} </em>
              </div>
              <div className="fluid-1-b mb-16">{content.contacto_titulo}</div>
            </div>
          </div>
          <div className="row mb-50">
            <div className="col-xs-12 col-sm-4">
              <div className="box mini-box p-20 mb-16 bg-cream">
                <h5 className="h3 mb-20">Dirección</h5>
                <p className="p1">
                  <span className="variable">{content.direction}</span>
                </p>
                <a
                  className="mt-20 link5"
                  href={content.direction_link}
                  target="_blank"
                >
                  See map
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="box mini-box p-20 mb-16 bg-cream">
                <h5 className="h3 mb-20">{content.email_titulo}</h5>
                <p className="p1">
                  <span className="variable">{content.email}</span>
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="box mini-box p-20 mb-16 bg-cream">
                <h5 className="h3">{content.telefono_titulo}</h5>
                <p className="p1">
                  <span className="variable">{content.telefono}</span>
                </p>
                <div className="mb-20"></div>
                <h5 className="h3">{content.whatsapp_titulo}</h5>
                <p className="p1">
                  <span className="variable">
                    <a href="whatsapp://send?text=Hello World!&phone=+9198********1">
                      {content.whatsapp}
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-7 col-sm-4">
              <h3 className="fluid-2-b mb-16">{content.contacta_pregunta}</h3>
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
                      Checkbox básico,
                      <Link
                        className="link4"
                        to={"/" + content.check_acepta_la_politica}
                        target="_blank"
                      >
                        politica privacidad
                      </Link>
                    </span>
                  </div>
                  <span className="is-error text-14-r missing">
                    You need check this Error checkbox
                  </span>
                </div>
              </div>
              <div className="row mb-50">
                <div className="col-xs-12">
                  <div className="btn btn-primary btn--medium">
                    {content.contacta_cta}
                  </div>
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
