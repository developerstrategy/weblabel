import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import "../../scss/components/header2.scss"

const Header = () => {
  const [open, setOpen] = useState(false)
  const [headerClassName, setHeaderClassName] = useState("")

  const handleScroll = headerClassName => {
    if (headerClassName !== "menuscroll" && window.pageYOffset >= 100) {
      setHeaderClassName("menuscroll")
    } else if (headerClassName === "menuscroll" && window.pageYOffset < 100) {
      setHeaderClassName("")
    }
  }

  React.useEffect(() => {
    window.onscroll = () => handleScroll(headerClassName)
  }, [headerClassName])
  return (
    <>
      <section className={open ? " open" : headerClassName ? "has-stick" : ""}>
        <div className="header-2 align-vertical">
          <div className="container header2-inner">
            <div className="row">
              <div className="col-xs-6  text-left align-middle">
                <Link className="fluid-2-l" to="/">
                  <h2 className="h2 logo">Logotipo</h2>
                </Link>
              </div>
              <div className="col-xs-6 text-right  ">
                <nav role="navigation">
                  <div className="menutext">MENU</div>
                  <div
                    id="menu-mobile"
                    className={
                      open ? "toggle menu-mobile open" : "toggle menu-mobile"
                    }
                    onClick={() => {
                      setOpen(!open)
                    }}
                  >
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className={open ? "menu-content open" : "menu-content"}>
            <div className="container ">
              <div className="row">
                <div className="col-xs-12">
                  <ul className="menu-list list-clear mb-20">
                    <li>
                      <Link className="fluid-2-l" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="fluid-2-l" to="/about">
                        About us
                      </Link>
                    </li>
                    <li>
                      <a className="fluid-2-l" href="servicios.html">
                        Services
                      </a>
                    </li>
                    <li>
                      <a className="fluid-2-l" href="servicio.html">
                        Servicio
                      </a>
                    </li>
                    <li>
                      <a className="fluid-2-l" href="blog.html">
                        blog
                      </a>
                    </li>
                    <li>
                      <a className="fluid-2-l" href="blog2.html">
                        blog interior
                      </a>
                    </li>
                    <li className="pb-50">
                      <a className="fluid-2-l" href="contacta.html">
                        Contacta
                      </a>
                    </li>
                    <li className="text-14-r">
                      <a href="legal_aviso.html">aviso legal</a>{" "}
                    </li>
                    <li className="text-14-r">
                      <a href="legal_cookies.html">política cookies</a>{" "}
                    </li>
                    <li className="text-14-r">
                      <a href="legal_privacidad.html">privacidad</a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
