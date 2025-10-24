import Navbar from './navbar'
import '../css/header.css'
import logo from '../assets/imgs/main_logo.svg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header_wrapper'>
            <div className='img'>
                <Link to="/"><img src={logo} className='img_logo' /></Link>
            </div>
            <div className='navbar_wrapper'>
                <Navbar />
            </div>
        </div>
    )
}

export default Header