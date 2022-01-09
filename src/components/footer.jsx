import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className=" bg-dark">
          <div className="row ">
            <div className="col-xs-12">
              <div className="container  ">
                <div className="row pt-50 pb-50 text-14-r">
                  <div className="col-xs-12 col-sm-4 mb-50">
                    <span className="h2 ">
                      Logotipo <em>.</em>{" "}
                    </span>
                  </div>
                  <div className="col-xs-12 col-sm-2 mb-20"></div>
                  <div className="col-xs-12 col-sm-2 mb-20">
                    <div className="p mb-16"> The company </div>
                    <ul className="list-clear">
                      <li>
                        <Link to="/about"> About us</Link>
                      </li>
                      <li>
                        <a href=" "> Contacta</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-sm-2 mb-20">
                    <div className="p mb-16"> Servicios </div>
                    <ul className="list-clear">
                      <li>
                        <a href=" "> Service 1</a>
                      </li>
                      <li>
                        <a href=" "> Service 2</a>
                      </li>
                      <li>
                        <a href=" "> Service 3</a>
                      </li>
                      <li>
                        <a href=" "> Service 4</a>
                      </li>
                      <li>
                        <a href=" "> Service 5</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-sm-2 mb-20">
                    <div className="p mb-16"> Blog </div>
                    <ul className="list-clear">
                      <li>
                        <a href=" "> Blog Last news 1</a>
                      </li>
                      <li>
                        <a href=" ">Blog Last news 2</a>
                      </li>
                      <li>
                        <a href=" ">Blog Last news 3</a>
                      </li>
                      <li>
                        <a href=" "> Blog Last news 4</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pt-20 pb-20">
            <div className="col-xs-12 col-sm-6  mdmax:mb-16">
              <ul className="list-inline text-12-r  social">
                <li>© 2021 The Digital Strategy</li>
                <li>
                  <a href="">youtube</a>
                </li>
                <li>
                  <a href=""> instagram</a>
                </li>
                <li>
                  <a href=""> linkedin</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-6 sm:min-text-right">
              <ul className="list-inline text-12-r social content-end">
                <li>
                  <a href="legal_aviso.html"> Aviso legal</a>
                </li>
                <li>
                  <a href="legal_cookies.html"> Política de cookies</a>
                </li>
                <li>
                  <a href="legal_privacidad.html">Política de Privacidad</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </footer>
    </>
  )
}

export default Footer
