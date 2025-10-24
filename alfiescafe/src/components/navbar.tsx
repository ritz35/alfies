import { useState } from "react";
import { Link } from 'react-router-dom';

//burger icon
import { FaBars, FaTimes } from "react-icons/fa";
import '../css/navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className='navbar'>
            {/* burger icon */}
            <div className="burger_icon" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* navbar */}
            <ul className={`nav_links ${isOpen ? 'active' : ""}`}>
                <li><Link to="/" onClick={closeMenu}>home</Link></li>
                <li><Link to="/about" onClick={closeMenu}>about</Link></li>
                <li><Link to="/menu" onClick={closeMenu}>menu</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>contact us</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar