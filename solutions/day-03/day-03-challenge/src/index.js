import React from 'react';
import ReactDOM from 'react-dom';
import profilePic from './images/photo.jpeg'
import iconClock from './images/icon-clock.png'
import iconVerified from './images/icon-verified.png'

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
  <div style={{backgroundColor: '#b7d8ff', textAlign: 'center', borderRadius: 20, paddingBlock: 40, margin: 10}}>
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

const user = {
  name: 'Tomas Dal Verme',
  position: 'ReactJS Developer',
  country: 'Argentina',
  skills: ['React', 'Javascript', 'HTML', 'CSS', 'React Native'],
  joined: 'Aug 06, 2022'
}

const picStyle = {
  width: 80,
  height: 80,
  borderRadius: 40,
}
const iconStyle = {
  width: 12,
  height: 12,
}
const container = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
}

const skillStyle = {
  backgroundColor: '#499eff',
  padding: 8,
  marginRight: 10,
  color: '#FFF',
  fontFamily: 'sans-serif',
  fontSize: 12,
  borderRadius: 8
}

const userCard = (
  <div style={{backgroundColor:'white', padding: 20, borderRadius: 10, margin: 10}}>
    <img src={profilePic} alt='profile pic' style={picStyle}/>
    <div style={{...container, paddingTop: 10}}>
      <p style={{margin: 0, marginRight: 5, fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: 14}}>{user.name.toUpperCase()}</p>
      <img src={iconVerified} alt='verified icon' style={iconStyle} />
    </div>
    <p style={{margin: 0, marginTop: 5, fontFamily: 'sans-serif', fontSize: 12, color: '#232323', paddingTop: 10}}>{user.position}, {user.country}</p>
    <p style={{margin: 0, marginTop: 5, fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: 12, paddingTop: 10}}>SKILLS</p>
    <div style={{display: 'flex'}}>
      {user.skills.map((value) => {return <p style={skillStyle}>{value}</p>})}
    </div>
    <div style={{...container, marginTop: 10}}>
      <img src={iconClock} alt='clock icon' style={iconStyle} />
      <p style={{margin: 0, marginLeft: 5, fontFamily: 'sans-serif', fontWeight: 'lighter', fontSize: 12, color: '#232323'}}>Joined on {user.joined}</p>
    </div>
  </div>
)

const app = (
  <div style={{backgroundColor: 'red', padding: 10}}>
    {subscribeSection}
    {userCard}
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(app, rootElement)