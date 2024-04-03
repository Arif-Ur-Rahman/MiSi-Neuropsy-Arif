import React from 'react'

const Map = () => {
    return (
      <section id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.935573645693!2d4.467339715998347!3d51.922302011446794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c43376fcde6937%3A0xdb5d18c277ba400b!2sMiSi%20NeuroPsy%20GGZ!5e0!3m2!1sen!2snl!4v1652368576266!5m2!1sen!2snl"
          width="100%"
          height="555"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    );
  };
  
  export default Map;