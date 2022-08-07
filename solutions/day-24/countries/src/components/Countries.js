import React from 'react'
import '../styles/Countries.css'
import Country from './Country'

const Countries = ({ countries }) => {
    return (
        <div className='countries'>
            {countries.map(country => (
                <Country key={country.name.common} {...country}/>
            ))}
        </div>
    )
}

export default Countries