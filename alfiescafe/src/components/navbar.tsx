import '../css/navbar.css'

// we need to change these to react router doms (Links) later

function Navbar(){
    return(
        <nav className='navbar'>
            <ul className='nav_links'>
                <li><a href="/">home</a></li>
                <li><a href="/about">about</a></li>
                <li><a href="/menu">menu</a></li>
                <li><a href="/contact_us">contact us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar