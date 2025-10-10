function LocationMap(){
    return (
        <div className="map_wrapper">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.8674046690207!2d175.2591755!3d-37.7227901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d23cda22555af%3A0x78237852d135f11!2sAlfies%20Cafe!5e0!3m2!1sen!2snz!4v1760083507038!5m2!1sen!2snz" 
            width="600" 
            height="450" 
            style={{border: 0}}
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}

export default LocationMap