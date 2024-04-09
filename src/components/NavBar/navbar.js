import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/newest-logo.png';
import menu from '../../assets/hamburger-menu.svg';
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const scrollWithOffset = (el, offset) => {
        const elementPosition = el.offsetTop - offset
        window.scroll({
            top: elementPosition,
            left: 0,
            behavior: 'smooth',
        })
    }

    return (
        <nav className='navbar'>

            <HashLink
                smooth
                to="/#intro"
                scroll={(el) => scrollWithOffset(el, 50)}
                tabIndex='0' >
                <img src={logo} alt="logo" className="logo" />
            </HashLink>

            <div className='desktopMenu'>

                <HashLink
                    smooth
                    to="/#intro"
                    className='desktopMenuListItem'
                    scroll={(el) => scrollWithOffset(el, 50)}
                    tabIndex='0' >
                    Home

                </HashLink>
                <HashLink smooth to="/#skills"
                    className='desktopMenuListItem'
                    scroll={(el) => scrollWithOffset(el, 50)}
                    tabIndex='0'
                >
                    About

                </HashLink>

                <HashLink smooth to="/#works"
                    className='desktopMenuListItem'
                    scroll={(el) => scrollWithOffset(el, 55)}
                    tabIndex='0'
                >
                    Works

                </HashLink>

            </div>
            <button className='desktopMenuBtn' onClick={() => {
                document.getElementById('footer').scrollIntoView({ behavior: 'smooth' })
            }}>
                Contact Me
            </button>
            <img src={menu} alt="menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
            <div className={showMenu ? 'navMenu active' : 'navMenu'}>

                <HashLink
                    smooth
                    to="/#intro"
                    className='mobMenuListItem'
                    scroll={(el) => scrollWithOffset(el, 50)}
                    tabIndex='0'
                    onClick={() => setShowMenu(false)} >
                    Home

                </HashLink>
                <HashLink smooth to="/#skills"
                    className='mobMenuListItem'
                    scroll={(el) => scrollWithOffset(el, 50)}
                    tabIndex='0'
                    onClick={() => setShowMenu(false)}
                >
                    About

                </HashLink>

                <HashLink smooth to="/#works"
                    className='mobMenuListItem'
                    scroll={(el) => scrollWithOffset(el, 55)}
                    tabIndex='0'
                    onClick={() => setShowMenu(false)}
                >
                    Works

                </HashLink>

                <HashLink smooth to="/#footer"
                    className='mobMenuListItem'
                    scroll={(el) => scrollWithOffset(el, 55)}
                    tabIndex='0'
                    onClick={() => setShowMenu(false)}
                >
                    Contact

                </HashLink>


            </div>
        </nav>
    );
}

export default Navbar;


