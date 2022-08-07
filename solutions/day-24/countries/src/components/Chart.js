import React, {useState} from 'react'
import BarChart from './BarChart'
import '../styles/Chart.css'

const Chart = ({data}) => {
    const title = '10 Most populated countries in the world'
    const getTotal = () => {
        return data.reduce((acc, curr) => {
            return acc + curr.value
        }, 0)
    }

    console.log(getTotal())

    return (
        <div className='chart'>
            <h2 className='chart__title'>{title}</h2>
            <div className='chart__chartContainer'>
                {data.map((value) => (<BarChart label={value.label} total={getTotal()} value={value.value}/>))}
            </div>
        </div>
    )
}

export default Chart