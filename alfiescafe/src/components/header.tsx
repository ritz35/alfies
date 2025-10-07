import Navbar from './navbar'
import '../css/header.css'
import logo from '../assets/imgs/main_logo.svg'

function Header() {
    return (
        <div className='header_wrapper'>
            <div className='img'>
                <img src={logo} className='img_logo' />
            </div>
            <div className='navbar_wrapper'>
                <Navbar />
            </div>
        </div>
    )
}

export default Header