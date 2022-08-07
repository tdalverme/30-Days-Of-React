import React from 'react'
import '../styles/BarChart.css'

const BarChart = ({label, value, total}) => {
    return (
        <div className='barChart'>
            <div className='barChart__labelContainer'>
                <h2 className='barChart__label'>{label}</h2>
            </div>
            <div className='barChart__bar'>
                <div style={{backgroundColor: 'orange', flex: value / total}}/>
            </div>
            <h2 className='barChart__value'>{value.toLocaleString()}</h2>
        </div>
    )
}

export default BarChart