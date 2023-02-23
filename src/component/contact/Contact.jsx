import React from 'react';
import './contact.css'

const Contact = () => {
    return (
        <section className="services section" id="contact">
            <h2 className='section__title'>Contact</h2>

            <div className="contact__wraper container grid">
                <a href="mailto:pawansingh6313@gmail.com" target='_blank'>
                    <i class="uil uil-envelope contact__icons"></i>
                </a>
                <a href="https://www.linkedin.com/in/pawan-singh-nagarkoti-625b5721a" target='_blank'>
                    <i class="uil uil-linkedin-alt contact__icons"></i>
                </a>
                <a href="tel:7310606521" target='_blank'>
                    <i class="uil uil-phone-alt contact__icons"></i>
                </a>
                <a href="https://wa.me/917310606521" target='_blank'>
                    <i class="uil uil-whatsapp contact__icons"></i>
                </a>
                <a href="https://github.com/pawan-nagarkoti" target='_blank'>
                    <i class="uil uil-github contact__icons"></i>
                </a>
            </div>
        </section>
    )
}

export default Contact