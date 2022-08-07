import React from 'react'
import '../styles/Header.css'

const Header = ({ numberOfCountries }) => {
    const title = 'World Countries Data'
    return (
        <div className='header'>
            <h2 className='header__title'>{title}</h2>
            <h1 className='header__subtitle'>Currently, we have {numberOfCountries} countries</h1>
        </div>
    )
}

export default Header