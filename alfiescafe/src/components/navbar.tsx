import { Link } from 'react-router-dom'
import '../css/navbar.css'


// we need to change these to react router doms (Links) later

function Navbar(){
    return(
        <nav className='navbar'>
            <ul className='nav_links'>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/menu">menu</Link></li>
                <li><Link to="/contact">contact us</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar