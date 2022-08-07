import React from 'react';
import ReactDOM from 'react-dom'

const isEven = (number) => { return number === 0 || number % 2 === 0 } 
const isPrime = (number) => {
  if (number === 1 || number === 0) {
    return false
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false
    }
  }

  return true
}

const Header = () => {
  const title = '30 Days Of React'
  const subtitle = 'Number Generator'

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px 0px 30px 0px'
  }
  
  const titleStyle = {
    fontFamily: 'Monospace',
    fontSize: 30,
    margin: '15px 0px 5px 0px'
  }
  
  const subtitleStyle = {
    fontFamily: 'Helvetica',
    fontSize: 18,
    margin: '10px 0px 0px 0px'
  }
  
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>{title}</p>
      <p style={subtitleStyle}>{subtitle}</p>
    </div>
  )
}

const Number = ({ number }) => {
  const containerStyle = {
    display: 'flex',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isPrime(number) ? '#FD5E53' : isEven(number) ? '#21BF73' : '#FDDB3A',
    color: 'white',
  }

  const numberStyle = {
    fontFamily: 'Monospace',
    fontSize: 28,
    margin: '0px'
  }
  
  return(
    <div style={containerStyle}>
      <p style={numberStyle}>{number}</p>
    </div>
  )
}
const Numbers = ({ numbers }) => {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '80px 80px 80px 80px 80px 80px 80px 80px',
    gridGap: '2px'
  }

  return (
    <div style={{display:'flex', overflow: 'clip'}}>
      <div style={containerStyle}>
        { 
          numbers.map((value) => (<Number number={value}/>))
        }
      </div>
    </div>
  )
}

let numbers = []
for (let i = 0; i < 32; i++) {
  numbers.push(i)
}

const app = (
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <Header/>
    <Numbers numbers={numbers}/>
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(app, rootElement)