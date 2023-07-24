import { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { FaBars} from "react-icons/fa"
import { ImCross } from "react-icons/im"

function navbar () {

    const [isMobile,setisMobile] = useState(false)

    const toggleMobile = () => {
            setisMobile(!isMobile)  
        }

    return (
        <div className='navbar-position'>
        <nav className='nav-cont'>
            <h3 className='logo'><span>.</span>Blog</h3>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={()=>setisMobile(false)}>
                <Link to="/" className='home'>
                    <li>Home</li>
                </Link>
                <Link to="/newsfeed" className='newsfeed'>
                    <li>News Feed</li>
                </Link>
                <Link to="/write-blog" className='write-blog'>
                    <li >Write Blog</li>
                </Link>
            </ul>
            <button className='menu-bar-icon' onClick={toggleMobile}>
                {isMobile ? <ImCross/>
                : <FaBars/> }
            </button>
        </nav>
        </div>
    )
}

export default navbar;



