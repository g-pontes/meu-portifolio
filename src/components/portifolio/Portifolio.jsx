import React, { useEffect, useState } from 'react'
import "./portifolio.css"
import data from "../../assets/data/portifolioData"
import Modal from './Modal'

const Portifolio = () => {

    const [nextItems, setNextItems] = useState(6)
    const [portifolios, setPortifolios] = useState(data)
    const [selectTab, setSelectTab] = useState('todos')
    const [showModal, setShowModal] = useState(false)
    const [activeID, setActiveID] = useState(null)

    const loadMoreHandler = () => {
        setNextItems(prev => prev + 3)
    };

    const showModalHandler = id => {
        setShowModal(true)
        setActiveID(id)
    };

    useEffect(() => {
        if (selectTab === 'todos') {
            setPortifolios(data)
        }

        if (selectTab === 'web-design') {
            const filteredData = data.filter(item => item.category === 'Web Design')
            setPortifolios(filteredData)
        }

        if (selectTab === 'ux-design') {
            const filteredData = data.filter(item => item.category === 'Ux')
            setPortifolios(filteredData)
        }
    }, [selectTab])

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
                        <button onClick={() => setSelectTab('todos')} className="portifolio__button">Todos</button>
                        <button onClick={() => setSelectTab('web-design')} className="portifolio__button">Web Design</button>
                        <button onClick={() => setSelectTab('ux-design')} className="portifolio__button">UX Design</button>
                    </div>
                </div>

                <div className="portifolio__group">
                    {
                        portifolios?.slice(0, nextItems)?.map((portifolio, index) => (
                            <div key={index} className="portifolio__box" data-aos='fade-zoom-in' data-aos-delay='50' data-aos-duration='1000'>
                                <figure>
                                    <img src={portifolio.imgUrl} alt="" className="portifolio__img" />
                                </figure>

                                <div className="portifolio__box-hover">
                                    <div className="portifolio__box-view">
                                        <button onClick={() => showModalHandler(portifolio.id)} className="portifolio__box-button">Veja Mais</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                {nextItems < portifolios.length && data.length > 6 && (
                    <div onClick={loadMoreHandler} className="portifolio__load">
                        <div className="button button-load">Mais</div>
                    </div>
                )}
            </div>

            {
                showModal && <Modal setShowModal={setShowModal} activeID={activeID}/>
            }

        </section>
    )
}

export default Portifolio