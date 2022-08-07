import React from 'react';
import ReactDOM from 'react-dom'
import { info } from './info'

const getBarPercentage = (country) => {
  console.log(country)
  let world = info.find((value) => { return value.country === 'World'})

  console.log(country.population / world.population)

  return country.population / world.population
}

const Bar = ({ countryInfo }) => {
  const containerSx = {
    display: 'flex',
    flex: 1,
    height: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0px 0px 5px 0px',
  }

  const countrySx = {
    display: 'flex',
    flex: 0.25,
    fontFamily: 'Helvetica',
    fontSize: 12,
    fontWeight: 'bold',
    margin: '0px 0px 0px 0px'
  }
  
  const barContainerSx = {
    display: 'flex',
    flex: 0.6,
  }

  const barSx = {
    height: 25,
    backgroundColor: 'orange'
  }
  
  const populationSx = {
    display: 'flex',
    flex: 0.15,
    fontFamily: 'Helvetica',
    fontSize: 12,
    fontWeight: 'bold',
    margin: '0px 0px 0px 10px',
  }

  return (
    <div style={containerSx}>
      <p style={countrySx}>{ countryInfo.country.toUpperCase() }</p>
      <div style={barContainerSx}>
        <div style={{...barSx, flex: getBarPercentage(countryInfo)}}/>
      </div>
      <p style={populationSx}>{ countryInfo.population }</p>
    </div>
  )
}

const BarChart = ({ values }) => (
  values.map((value) => (<Bar key={value.country} countryInfo={value} />))
)

const Header = () => {
  const h1 = '30 Days Of React'
  const h2 = 'World Population'
  const h3 = 'Ten most populated countries'

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px 0px 30px 0px'
  }
  
  const h1Style = {
    fontFamily: 'Helvetica',
    fontSize: 30,
    fontWeight: 'bold',
    margin: '15px 0px 0px 0px'
  }
  
  const h2Style = {
    fontFamily: 'Helvetica',
    fontSize: 18,
    margin: '10px 0px 0px 0px'
  }

  const h3Style = {
    fontFamily: 'Helvetica',
    fontSize: 12,
    margin: '10px 0px 0px 0px'
  }
  
  return (
    <div style={containerStyle}>
      <p style={h1Style}>{h1}</p>
      <p style={h2Style}>{h2}</p>
      <p style={h3Style}>{h3}</p>
    </div>
  )
}

const app = (
  <div>
    <Header/>
    <BarChart values={info}/>
  </div>
)

const rootElement = document.getElementById('root');
ReactDOM.render(app, rootElement)