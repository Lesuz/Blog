import '../styles/Navbar.css'
import { useDebugValue, useState } from 'react'

// font-awesome css file needed so the fonts work in classname
import 'font-awesome/css/font-awesome.min.css'

import { MenuList } from './MenuList'
// import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    const menuList = MenuList.map(({ url, title }, index) => {
        return (
            <li key={index}>
                <a href={url}>{title}</a>
            </li >
        )
    })

    const handleClick = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <nav>
            <div className='menu-icon' onClick={handleClick}>
                <i className={toggleMenu ? 'fa fa-times' : 'fa fa-bars'}></i>
            </div>
            <div className='logo'>
                LOGO
            </div>
            <ul className={toggleMenu ? 'menu-links' : 'menu-links close'} >
                {menuList}
            </ul>
        </nav >
    )






    /* const [toggleMenu, setToggleMenu] = useState(false)
    const [screenSize, setScreenSize] = useState(window.innerWidth)

    // function to toggle the value of the menu --- false = menu closed --- true = menu open
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

<FontAwesomeIcon icon={toggleMenu ? { faBars } : { faXmark }} />

<i className={toggleMenu ? (<i>{"cross"} < FaTimes /> </i>) : (<i>{"bars"} < FaBars /> </i>)}></i>

    useEffect(() => {

        const changeSize = () => {
            setScreenSize(window.innerWidth);
        }

        window.addEventListener('changesize', changeSize)

        return () => {
            window.removeEventListener('changesize', changeSize)
        }
    }, [])

    return (
        <nav>
            <div className='header'>
                <button onClick={toggleNav} className="mobile-nav">H</button>
                <p>LOGO</p>
                {(toggleMenu || screenSize > 500) && (
                    <ul className="navbar">
                        <li className="navbar-item">Home</li>
                        <li className="navbar-item">Articles</li>
                        <li className="navbar-item">Other News</li>
                        <li className="navbar-item">About</li>
                    </ul>
                )}
            </div>
        </nav >
    ) 
    
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    const closeMenu = () => {
        setToggleMenu(false)
    }

    return (
        <div className='navbar'>
            <div className='logo'>
                <p>LOGO</p>
            </div>
            <div className={`nav-links ${toggleMenu ? " showMenu" : ""}`}>
                <div className='links'>
                    <a to="/">Home</a>
                    <a href="/articles">Articles</a>
                    <a href="/othernews">Other News</a>
                    <a href="/about">About</a>
                </div>
                <button onClick={() => setToggleMenu(!toggleMenu)}></button>
            </div>
        </div >
    )

    */
}

export default Navbar