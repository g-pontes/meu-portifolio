import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">g-Pontes</h1>

                <ul className="footer__list">
                    <li><a href="#about" className="footer__link">Sobre</a></li>
                    <li><a href="#skills" className="footer__link">Skills</a></li>
                    <li><a href="about" className="footer__link">Portifolio</a></li>
                    <li><a href="about" className="footer__link">Contato</a></li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/g.pontes_12"
                        className="home__social-icon" target="_blank" rel="noopener noreferrer">
                        <i className="uil uil-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/g-pontes"
                        className="home__social-icon" target="_blank" rel="noopener noreferrer">
                        <i className="uil uil-linkedin-alt"></i>
                    </a>
                    <a href="https://github.com/g-pontes"
                        className="home__social-icon" target="_blank" rel="noopener noreferrer">
                        <i className="uil uil-github-alt"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; g-Pontes. Todos os direitos reservados</span>
            </div>
        </footer>
    )
}

export default Footer