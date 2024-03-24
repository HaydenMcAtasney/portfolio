import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/portfolio-logo.png';
import { Link } from 'react-scroll';
import menu from '../../assets/hamburger-menu.svg';
import { HashLink } from 'react-router-hash-link';
import { setActiveLink } from 'react-scroll/modules/mixins/scroller';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const scrollWithOffset = (el, offset) => {
        const elementPosition = el.offsetTop - offset
        window.scroll ({
            top: elementPosition,
            left: 0,
            behavior: 'smooth',
        })
    }

    return (
        <nav className='navbar'>
            <img src={logo} alt="logo" className="logo" />
            <div className='desktopMenu'>

                <HashLink 
                smooth 
                to="/#intro" 
                className='desktopMenuListItem'
                scroll={(el) => scrollWithOffset(el, 50)}
                tabIndex='0' >
                    Home
                    {/* <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link> */}
                </HashLink>
                <HashLink smooth to="/#skills"
                className='desktopMenuListItem'
                scroll={(el) => scrollWithOffset(el, 50)}
                tabIndex='0'
                >
                    About
                    {/* <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-75} duration={500} className='desktopMenuListItem'>About</Link> */}
                </HashLink>

                <HashLink smooth to="/#works" 
                className='desktopMenuListItem'
                scroll={(el) => scrollWithOffset(el, 55)}
                tabIndex='0'
                >
                    Works
                    {/* <Link activeClass='active' to='works' spy={true} smooth={true} offset={-75} duration={500} className='desktopMenuListItem'>Works</Link> */}
                </HashLink>
                {/* <Link activeClass='active' to='clients' spy={true} smooth={true} duration={500} className='desktopMenuListItem'>Clients</Link> */}
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
                    {/* <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link> */}
                </HashLink>
                <HashLink smooth to="/#skills"
                className='mobMenuListItem'
                scroll={(el) => scrollWithOffset(el, 50)}
                tabIndex='0'
                onClick={() => setShowMenu(false)}
                >
                    About
                    {/* <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-75} duration={500} className='desktopMenuListItem'>About</Link> */}
                </HashLink>

                <HashLink smooth to="/#works" 
                className='mobMenuListItem'
                scroll={(el) => scrollWithOffset(el, 55)}
                tabIndex='0'
                onClick={() => setShowMenu(false)}
                >
                    Works
                    {/* <Link activeClass='active' to='works' spy={true} smooth={true} offset={-75} duration={500} className='desktopMenuListItem'>Works</Link> */}
                </HashLink>

                <HashLink smooth to="/#footer" 
                className='mobMenuListItem'
                scroll={(el) => scrollWithOffset(el, 55)}
                tabIndex='0'
                onClick={() => setShowMenu(false)}
                >
                    Contact
                    {/* <Link activeClass='active' to='works' spy={true} smooth={true} offset={-75} duration={500} className='desktopMenuListItem'>Works</Link> */}
                </HashLink>


            </div>
        </nav>
    );
}

export default Navbar;


