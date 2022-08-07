import React from 'react';
import ReactDOM from 'react-dom';

const buttonStyle = {
  border: 'none',
  backgroundColor: '#FE521A',
  borderRadius: 10,
  paddingBlock: 10,
  paddingInline: 30,
  color: 'white',
  fontFamily: 'Helvetica',
  fontWeight: 'bold'
}

const MyButton = ({ action }) => (
  <button style={buttonStyle}>{action}</button>
)

const inputStyle = {
  borderRadius: 10,
  paddingBlock: 8,
  paddingLeft: 15,
  paddingRight: 40,
  color: 'white',
  fontFamily: 'Helvetica',
  borderWidth: 2,
  borderColor: '#aaa'
}

const MyInput = ({ placeholder }) => (
  <input placeholder={placeholder} style={{...inputStyle}}/>
)

const warningBoxStyle = {
  backgroundColor: '#FCFD92',
  width: 300,
  overflow: 'hidden',
  fontFamily: 'Helvetica',
  fontSize: 14,
  padding: '5px 10px 5px 20px',
  borderRadius: 15,
}

const successBoxStyle = {
  backgroundColor: '#9BFF73',
  width: 300,
  overflow: 'hidden',
  fontFamily: 'Helvetica',
  fontSize: 14,
  padding: '5px 10px 5px 20px',
  borderRadius: 15,
}

const AlertBox = ({isWarning=false, message}) => (
  <div style={isWarning ? warningBoxStyle : successBoxStyle}>
    <p>{message}</p>
  </div>
)

const app = (
  <div>
    <MyButton action='Click me'/>
    <MyInput placeholder='This is my input'/>
    <AlertBox isWarning message='This is a warning!' />
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(app, rootElement)

// Make a reusable Button component.
// Make a reusable InputField component.
// Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).