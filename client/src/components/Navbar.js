import '../styles/Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

// font-awesome css file needed so the fonts work in classname
import 'font-awesome/css/font-awesome.min.css'

import { MenuList } from './MenuList'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    const menuList = MenuList.map(({ url, title }, index) => {
        return (
            <li key={index}>
                <Link to={url}>{title}</Link>
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
                <Link to="/homepage">
                    LOGO
                </Link>
            </div>
            <ul className={toggleMenu ? 'menu-links' : 'menu-links close'} onClick={() => setToggleMenu(prevState => !prevState)}>
                {menuList}
            </ul>
        </nav >
    )

}

export default Navbar