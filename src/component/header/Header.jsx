import React, { useState } from 'react';
import './header.css'

const Header = () => {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (this.scrollY >= 80) header.classList.add('scroll-header');
        else header.classList.remove('scroll-header');
    })
    const [toggle, showMenu] = useState(false)
    return (
        <header className='header'>
            <nav className="nav container">
                <a href="#" className='nav_logo'>Portfolio<span>.</span></a>
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item" onClick={()=> showMenu(!toggle)}>
                            <a href="#home" className='nav__link'>
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item" onClick={()=> showMenu(!toggle)}>
                            <a href="#about" className='nav__link'>
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>
                        <li className="nav__item" onClick={()=> showMenu(!toggle)}>
                            <a href="#skills" className='nav__link'>
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>
                        <li className="nav__item" onClick={()=> showMenu(!toggle)}>
                            <a href="#services" className='nav__link'>
                                <i className="uil uil-briefcase-alt nav__icon"></i>Services
                            </a>
                        </li>
                        <li className="nav__item" onClick={()=> showMenu(!toggle)}>
                            <a href="#project" className='nav__link'>
                                <i className="uil uil-scenery nav__icon"></i>Project
                            </a>
                        </li>
                        <li className="nav__item" onClick={()=> showMenu(!toggle)}>
                            <a href="#contact" className='nav__link'>
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>
                    <i className='uil uil-times nav__close' onClick={()=> showMenu(!toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={()=> showMenu(!toggle)}>
                    <i className='uil uil-apps'></i>
                </div>
            </nav>
        </header>
    )
}

export default Header