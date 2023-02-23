import React from 'react'
import './skill.css'
import html from '../../assets/my_skill/images-removebg-preview.png';
import css from '../../assets/my_skill/css-removebg-preview.png';
import javascript from '../../assets/my_skill/javaScript-removebg-preview.png';
import bootstrap from '../../assets/my_skill/bootstrap-removebg-preview.png';
import tailwind from '../../assets/my_skill/tailwind-removebg-preview.png';
import scss from '../../assets/my_skill/scss-removebg-preview.png';
import reactjs from '../../assets/my_skill/reactJS-removebg-preview.png';
import redux from '../../assets/my_skill/reduxToolkit-removebg-preview.png';
import material from '../../assets/my_skill/materailUI-removebg-preview.png'

const skill = [
    {
        image: html,
        name: "HTML 5"
    },
    {
        image: css,
        name: "CSS 3"
    },
    {
        image: javascript,
        name: "JavaScript"
    },
    {
        image: reactjs,
        name: "React JS"
    },
    {
        image: redux,
        name: "Redux Toolkit"
    },
    {
        image: tailwind,
        name: "Tailwind"
    },
    {
        image: bootstrap,
        name: "Bootstrap"
    },
    {
        image: scss,
        name: 'SASS'
    },
    {
        image: material,
        name: 'Material'
    }

]

const Skill = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className='section__subtitle'>My technical level</span>

            <div className="about__info grid display-flex container display-grid">
                {
                    skill.map(({ image, name }, index) =>
                        <div className="about__box custom-size" key={index}>
                            <img src={image} alt="" className='skill__image' />
                            <h3 className='about__title custom-padding'>{name}</h3>
                        </div>
                    )
                }
            </div>

        </section>
    )
}

export default Skill