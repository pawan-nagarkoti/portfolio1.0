import React from 'react';
import './service.css'

const Service = () => {
    return (
        <section className="services section" id="services">
            <h2 className='section__title'>Services</h2>
            <span className="section__subtitle">what i offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div className='cart-container'>
                        <i class="uil uil-file-medical about__icons"></i>
                        <h3>Website Creation</h3>
                        <p>Development of professional websites, web system, blogs and online stores.</p>
                    </div>
                    <div className='cart-container'>
                        <i class="uil uil-browser about__icons"></i>
                        <h3>Responsive Sites</h3>
                        <p>Creattion of responsive website for the best viewing at all resolutions.</p>
                    </div>
                    <div className='cart-container'>
                        <i class="uil uil-estate about__icons"></i>
                        <h3>UI/UX Design</h3>
                        <p>Design layouts that fit your business in a professional and faithful way in development.</p>
                    </div>
                    <div className='cart-container'>
                        <i class="uil uil-setting about__icons"></i>
                        <h3>Semantic Code</h3>
                        <p>Strategy and monitoring for your business, making your website appear better and better in searches.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service