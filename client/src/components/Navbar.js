import '../styles/Navbar.css'
import { useState } from 'react'

// font-awesome css file needed so the fonts work in classname
import 'font-awesome/css/font-awesome.min.css'

import { MenuList } from './MenuList'

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

}

export default Navbar