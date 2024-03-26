import React from 'react'
import { motion } from 'framer-motion'
import "./skills.css"
import Frontend from "./Frontend"
import Backend from "./Backend"

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Meu nível técnico</span>

        <div className="skills__container container grid">
            <motion.div
                initial={{ opacity: 0, y:200}}
                transition={{ duration: 1}}
                whileInView={{ opacity:1, y:0}}
            ><Frontend />
            
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y:200}}
                transition={{ duration: 1}}
                whileInView={{ opacity:1, y:0}}
            ><Backend />

            </motion.div>
        </div>
    </section>
  )
}

export default Skills