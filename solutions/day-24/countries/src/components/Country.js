import React from 'react'
import '../styles/Country.css'

const Country = ({name, flags, capital, languages, population, currencies}) => {
    const formattedCapital = capital ? capital[0] : ''
    const formattedLang = languages ? Object.values(languages).join(', ') : ''
    const formattedCurr = currencies ? Object.keys(currencies)[0] : ''
    
    return (
        <div className='country'>
            <img className='country__flag' src={flags.png} alt='flag'/>
            <h2 className='country__name'>{name.common}</h2>
            <h3 className='country__info'><b>Capital:</b> {formattedCapital}</h3>
            <h3 className='country__info'><b>Languages:</b> {formattedLang}</h3>
            <h3 className='country__info'><b>Population:</b> {population.toLocaleString()}</h3>
            <h3 className='country__info'><b>Currency:</b> {formattedCurr}</h3>
        </div>
    )
}

export default Country