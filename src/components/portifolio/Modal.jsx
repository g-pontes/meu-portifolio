import React from 'react'
import portifolios from './../../assets/data/portifolioData';
import "./modal.css"

const Modal = ({ activeID, setShowModal }) => {

    const portifolio = portifolios.find(portifolio => portifolio.id === activeID)

    return (
        <div className="modal">
            <div className="modal__container">
                <div>
                    <figure>
                        <img className="modal__img" src={portifolio.imgUrl} alt="" />
                    </figure>
                </div>

                <div>
                    <h2 className="modal__title">
                        {portifolio.title}
                    </h2>

                    <p className="modal__description">
                        {portifolio.description}
                    </p>

                    <div className="modal__tech">
                        <h4 className="modal__tech-name">
                            Tecnologias:
                        </h4>

                        {portifolio.technologies.map((item, index) => (
                            <span
                                key={index}
                                className="modal__tech-type"
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    <a href={portifolio.siteUrl}>
                        <button className="modal__demo">
                            Veja Demo
                        </button>
                    </a>
                </div>

                <button onClick={() => setShowModal(false)} className="modal__close">
                    <i className="uil uil-times"></i>
                </button>
            </div>
        </div>
    );
};

export default Modal