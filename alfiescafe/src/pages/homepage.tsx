import Slideshow from "../components/slideshow";
import allergy_icon from '../assets/imgs/allergy_icon.svg'
import gf_icon from '../assets/imgs/gf_icon.svg'
import milk_icon from '../assets/imgs/milk_icon.svg'

import '../css/homepage.css'

function Homepage() {
    return (
        <div className="homepage_wrapper">
            <div className="slideshow_wrapper">
                <Slideshow />
            </div>
            <div className="icons_wrapper">
                <div>
                    <img className="allergy_icon" src={allergy_icon} />
                    <h1>allergies</h1>
                    <p>Please tell us any allergys you may have and we will do our best to accomidate to you.</p>
                </div>
                <div>
                    <img className="gf_icon" src={gf_icon} />
                    <h1>Gluten Free</h1>
                    <p>We have many gluten free options, from the cabinet to the menu, but please let the staff know so we can show you</p>
                </div>
                <div>
                    <img className="milk_icon" src={milk_icon} />
                    <h1>Alternative Milk</h1>
                    <p>We have many alternative milk; Almond, Soy, Coconut, Oat, and Trim milk.</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage