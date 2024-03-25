import React from 'react'
import "./header.css"

function header() {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Smith</a>

        <div className="nav__menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="index.html" className="nav__link">
                <i className="uil uil-estate nav__icon"></i> home
              </a>
            </li>

            <li className="nav__item">
              <a href="index.html" className="nav__link">
                <i className="uil uil-user nav__icon"></i> Sobre
              </a>
            </li>

            <li className="nav__item">
              <a href="index.html" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="index.html" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portifolio
              </a>
            </li>

            <li className="nav__item">
              <a href="index.html" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contato
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close"></i>
        </div>
        <div className="nav__toggle">
          <i class="uil uil-align-right"></i>
        </div>
      </nav>
    </header>
  )
}

export default header