import React from 'react'
import Menu from './Menu'

const Main = () => (
    <div className="alignCenter">
        <img
            className="brain"
            src={process.env.PUBLIC_URL + '/images/pan-mozg.jpg'}
            alt="Pan mózg"
        />
        <Menu />
    </div>
)

export default Main
