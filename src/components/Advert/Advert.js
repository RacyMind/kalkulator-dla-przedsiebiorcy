import React from 'react'

const Advert = () => (
    <a className="advert" target="_blank" href="https://racymind.pl">
        <img
            src={process.env.PUBLIC_URL + '/images/logo-racymind.svg'}
            alt="Racy Mind"
        />
        <div className="text">
            Tworzymy <span>strony www</span> od 10 lat
        </div>
    </a>
)
export default Advert
