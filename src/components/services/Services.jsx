import React, { useState } from 'react'
import "./services.css"
import { motion } from 'framer-motion'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Serviços</h2>
            <span className="section__subtitle">O que eu ofereço</span>

            <div className="services__container container grid">
                <motion.div
                    className="services__content"
                    initial={{ opacity: 0, x: -200 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Designer de <br /> Produto</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        Veja Mais <i
                            className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"} >
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Designer de Produto</h3>
                            <p className="services__modal-description">
                                Atendimento com mais de 3 anos de experiência.
                                Fornecendo trabalho de qualidade a clientes e empresas.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Eu desenvolvo a interface do usuário.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desenvolvimento de páginas web.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Eu crio interações de elementos UX.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Posiciono a marca da sua empresa.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design e mockups de produtos para empresas.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Ui/Ux <br /> Designer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>Veja Mais <i
                        className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Ui/Ux Designer</h3>
                            <p className="services__modal-description">
                                Atendimento com mais de 3 anos de experiência.
                                Fornecendo trabalho de qualidade a clientes e empresas.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Eu desenvolvo a interface do usuário.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desenvolvimento de páginas web.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Eu crio interações de elementos UX.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Posiciono a marca da sua empresa.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design e mockups de produtos para empresas.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <motion.div
                    className="services__content"
                    initial={{ opacity: 0, x: 200 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Designer de <br /> Dashboards</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>Veja Mais <i
                        className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Designer de Dashboars</h3>
                            <p className="services__modal-description">
                                Atendimento com mais de 3 anos de experiência.
                                Fornecendo trabalho de qualidade a clientes e empresas.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Eu desenvolvo a interface do usuário.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desenvolvimento de páginas web.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Eu crio interações de elementos UX.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Posiciono a marca da sua empresa.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design e mockups de produtos para empresas.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Services