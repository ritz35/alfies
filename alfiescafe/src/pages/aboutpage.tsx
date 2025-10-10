import '../css/aboutuspage_.css'
// import { coffeeSupremeContent } from '../assets/coffeeSupreme'
import { aboutAlfiesContent } from '../assets/aboutalfiescontent'
import img_coffeebag from '../assets/imgs/coffee_bags.svg'

function AboutPage() {
    return (
        <div className='aboutuspage_wrapper'>
            <div className='AU_title_wrapper'>
                <img className='AU_CB_image' src={img_coffeebag} />
                <div className='AU_title_section'>
                    <h1 className='about_us_title'>about us</h1>
                </div>
            </div>

            <div className='aboutuspage_content'>
                <h1 className='coffee_heading'>{aboutAlfiesContent.title}</h1>
                <div className='coffee_content_wrapper'>
                    <p className='coffee_content' dangerouslySetInnerHTML={{ __html: aboutAlfiesContent.intro }} />
                    <p className='coffee_content' dangerouslySetInnerHTML={{ __html: aboutAlfiesContent.coffeeSection }} />
                    <p className='coffee_content' dangerouslySetInnerHTML={{ __html: aboutAlfiesContent.foodSection }} />
                    <p className='coffee_content' dangerouslySetInnerHTML={{ __html: aboutAlfiesContent.closing }} />
                </div>
            </div>
        </div>
    )
}
export default AboutPage