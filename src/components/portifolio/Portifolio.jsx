import React from 'react'
import "./portifolio.css"
import data from "../../assets/data/portifolioData"

const Portifolio = () => {
  return (
    <section className="portifolio section" id='portifolio'>
        <h2 className="section__title">Portifolio</h2>
            <span className="section__subtitle">Projetos mais recentes</span>
        <div className="portifolio__container">
            <div className="portifolio__content">
                <div className="portifolio__title">
                    <h3 className="portifolio__title-name">
                        Meus projetos
                    </h3>
                </div>

                <div className="portifolio__buttons">
                    <button className="portifolio__button">Todos</button>
                    <button className="portifolio__button">Web Design</button>
                    <button className="portifolio__button">UX Design</button>
                </div>
            </div>

            <div className="portifolio__group">
                {
                    data?.map((portifolio,index) =>(
                        <div className="portifolio__box" data-aos='fade-zoom-in' data-aos-delay='50' data-aos-duration='1000'>
                            <figure>
                                <img src={portifolio.imgUrl} alt="" className="portifolio__img" />
                            </figure>

                            <div className="portifolio__box-hover">
                                <div className="portifolio__box-view">
                                    <button className="portifolio__box-button">Veja Mais</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Portifolio