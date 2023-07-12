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
        <nav className='nav-cont'>
            <h3 className='logo'><span>.</span>Blog</h3>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={()=>setisMobile(false)}>
                <Link to="/home" className='home'>
                    <li>Home</li>
                </Link>
                <Link to="/contact" className='contact'>
                    <li>Contact</li>
                </Link>
                <Link to="/write-blog" className='write-blog'>
                    <li >Write Blog</li>
                </Link>
                <Link to="/login" className='login'>
                    <li>Login</li>
                </Link>
                <Link to="/logout" className='logout'>
                    <li>Log out</li>
                </Link>
                <Link to="/sign-up" className='sign-Up'>
                    <li>Sign Up</li>
                </Link>
            </ul>
            <button className='menu-bar-icon' onClick={toggleMobile}>
                {isMobile ? <ImCross/>
                : <FaBars/> }
            </button>
        </nav>
    )
}

export default navbar;



