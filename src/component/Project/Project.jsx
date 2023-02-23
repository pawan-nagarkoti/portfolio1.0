import React from 'react';
import './project.css'
import work from '../../assets/work1.jpg'
import ecommerce from '../../assets/web/ecommerce.png';
import youtube from '../../assets/web/youtube-clone.png';
import covid from '../../assets/web/covid-application.png';
import weather from '../../assets/web/weather-application.png';
import food from '../../assets/web/food-application.png';

const project = [
    {
        image: ecommerce,
        name: 'Ecommerce',
        website: 'https://ornate-pony-ec242c.netlify.app/',
        sourceCode: 'https://github.com/pawan-nagarkoti/ecommerce-with-reduxtoolkit'
    },
    {
        image: youtube,
        name: 'Youtube Clone',
        website: 'https://magical-chebakia-2cbb0c.netlify.app/',
        sourceCode: 'https://github.com/pawan-nagarkoti/Youtube-Clone'
    },
    {
        image: covid,
        name: 'Covid Application',
        website: 'https://hardcore-archimedes-56914b.netlify.app/',
        sourceCode: 'https://github.com/pawan-nagarkoti/Covid-application'
    },
    {
        image: weather,
        name: 'Weather Application',
        website: 'https://quirky-turing-5bfe14.netlify.app/',
        sourceCode: 'https://github.com/pawan-nagarkoti/weather-application'
    },
    {
        image: food,
        name: 'Food Restaurant',
        website: 'https://pawan-singh-nagarkoti.github.io/food/',
        sourceCode: 'https://github.com/pawan-nagarkoti/Food-application'
    },
]

const Project = () => {
    return (
        <section className="services section" id="project">
            <h2 className='section__title'>Project</h2>
            {/* <span className="section__subtitle">what i offer</span> */}

            <div className="services__container container grid">
                <div className="services__content">
                    {
                        project.map(({ image, name, website, sourceCode }, index) =>
                            <div className='cart-containers' key={index}>
                                <img src={image} alt="" className='project-custom-height'/>
                                <h3>{name}</h3>
                                <hr />
                                {/* <p>Development of professional websites, web system, blogs and online stores.</p> */}
                                <div className='live-code'>
                                    <button className='website-button'>
                                        <a href={website} target='_blank' className='text-color'>
                                            Website
                                        </a>
                                    </button>
                                    <button className='website-button' >
                                        <a href={sourceCode} className='text-color' target='_blank'>
                                            View Code
                                        </a>
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Project;