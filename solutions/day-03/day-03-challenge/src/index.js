import React from 'react';
import ReactDOM from 'react-dom';

const inputStyle = { 
  border: 0,
  backgroundColor: '#FFF',
  borderRadius: 8,
  padding: 10,
  color: '#AAA',
  marginRight: 5,
  marginLeft: 5,
  fontFamily: 'sans-serif',
}

const buttonStyle = { 
  border: 0,
  backgroundColor: '#ff6265',
  borderRadius: 8,
  padding: 15,
  color: '#FFF',
  width: 250,
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
}

const subscribeSection = (
  <div style={{backgroundColor: '#b7d8ff', textAlign: 'center', borderRadius: 20, paddingBlock: 40}}>
    <p style={{fontFamily: 'sans-serif', fontWeight: 'bold', marginBottom: 30, marginTop: 0, fontSize: 30}}>SUBSCRIBE</p>
    <p style={{fontFamily: 'sans-serif', fontWeight: 'lighter', marginBottom: 50, marginTop: 0, fontSize: 20}}>Sign up with your email address to receive news and updates.</p>
    <div style={{marginBottom: 25, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <input type='text' placeholder='First name' style={inputStyle}/>
      <input type='text' placeholder='Last name' style={inputStyle}/>
      <input type='text' placeholder='Email' style={inputStyle}/>
    </div>
    <button style={buttonStyle} onClick={() => alert('You subscribed!')}>Subscribe</button>
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(subscribeSection, rootElement)