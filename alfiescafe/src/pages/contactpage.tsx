import '../css/contactpage.css'
import LocationMap from '../components/locationMap'
import img_cafe from '../assets/imgs/cafe2.jpg'

function ContactsPage() {
    return (
        <div className='contactPage_wrapper'>
            <div className='CPage_title_wrapper'>
                <img className='CPage_img_cafe' src={img_cafe} />
                <div className='CPage_title_section'>
                    <h1 className='CPage_title'>Contact Us</h1>
                </div>
            </div>
            <div className='CPage_subheading_wrapper'>
                <p className="contact_intro">
                    We’d love to hear from you! Whether you’re booking a table, organising a catch-up, or just want to say hello,
                    feel free to reach out or stop by.
                </p>
            </div>
            <div className='CPage_content_wrapper'>
                <div className='details_wrapper'>
                    <div className="contact_details">
                        <h2>Find Us</h2>
                        <p className='contact_title'><strong>Alfie’s Café</strong><br />Rototuna, Hamilton, New Zealand</p>

                        <h2>Opening Hours</h2>
                        <ul>
                            <li><strong>Mon – Fri:</strong> 7:00 AM – 4:00 PM</li>
                            <li><strong>Sat – Sun:</strong> 7:00 AM – 4:00 PM</li>
                        </ul>

                        <h2>Contact</h2>
                        <p className='contact_title'>
                            <strong>Phone:</strong> <a href="tel:+6478525100">07 852 5100</a><br />
                            <strong>Email:</strong> <a href="mailto:alfiescafe@gmail.com">alfiescafe@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div className='maps_wrapper'>
                    <LocationMap />
                </div>
            </div>
        </div>
    )
}
export default ContactsPage