import { useState, useEffect } from 'react'
import '../css/slideshow.css'

import img1 from '../assets/imgs/cafe.jpg'
import img2 from '../assets/imgs/cafe2.jpg'
import img3 from '../assets/imgs/chef.jpg'
import img4 from '../assets/imgs/gentlemen.jpg'
import img5 from '../assets/imgs/coffee.png'
import img6 from '../assets/imgs/coffee2.jpg'

function Slideshow() {
    const images = [img1, img2, img3, img4, img5, img6];
    const interval = 4000;

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length)
        }, interval)
        return () => clearInterval(timer)
    }, [current])

    //to go to the next image in the slide
    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length)
    }

    //to go to the previous image in the slide
    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <div className='slideshow_container'>
            {images.map((img, index) => (
                <div key={index} className={`slide ${index === current ? 'active' : ''}`}>
                    <img src={img} />
                </div>
            ))}

            <button className='arrow left' onClick={prevSlide}>❮</button>
            <button className='arrow right' onClick={nextSlide}>❯</button>

            <div className='indicators'>
                {images.map((_, index) => (
                    <span key={index} className={`dot ${index === current ? 'active' : ''}`} onClick={() => setCurrent(index)}></span>
                ))}
            </div>
        </div>
    )
}

export default Slideshow