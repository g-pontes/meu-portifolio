import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Basketball from "../../assets/24539435_6944964.jpg"
import Music from "../../assets/18394213_5941794.jpg"
import Travel from "../../assets/20824563_6374140.jpg"
import Blog from "../../assets/pexels-lukas-317385.jpg"
import "./portifolio.css";

const items = [
    {
        id: 1,
        title: "Basketball App",
        img: Basketball,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore provident eum cum, est veniam non, dolores quasi id pariatur aspernatur ipsa quaerat esse voluptatem hic eos. Culpa earum qui corporis.",
    },

    {
        id: 2,
        title: "Music App",
        img: Music,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore provident eum cum, est veniam non, dolores quasi id pariatur aspernatur ipsa quaerat esse voluptatem hic eos. Culpa earum qui corporis.",
    },

    {
        id: 3,
        title: "Travel App",
        img: Travel,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore provident eum cum, est veniam non, dolores quasi id pariatur aspernatur ipsa quaerat esse voluptatem hic eos. Culpa earum qui corporis.",
    },

    {
        id: 4,
        title: "React Blog",
        img: Blog,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore provident eum cum, est veniam non, dolores quasi id pariatur aspernatur ipsa quaerat esse voluptatem hic eos. Culpa earum qui corporis.",
    }
]

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["end end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section className='section__portifolio'>
            <div className="portifolio__container">
                <div className="portifolio__wrapper">
                    <div className="portifolio__imgContainer" ref={ref}>
                        <img className="portifolio__img" src={item.img} alt="" />
                    </div>
                    <motion.div className="portifolio__data" style={{ y }}>
                        <h2 className="portifolio__title">{item.title}</h2>
                        <p className="portifolio__description">{item.desc}</p>
                        <button className="button protifolio__button">Veja a Demo!</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portifolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
    return (
        <div className="portifolio " id="portifolio" ref={ref}>
            <div className="progress">
                <h2 className="section__title-portifolio">Portifolio</h2>
                <span className="section__subtitle-portifolio">Meus Projetos</span>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portifolio