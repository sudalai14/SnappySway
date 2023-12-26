import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
export default function login() {
  return (
    <div className='mainContainerForsignup'>
      <div className='submainContainer'>
        <div style={{flex:1, marginLeft:150, marginBottom:"170px"}}>
          <p className='logoText'>Snappy<span className='part'>Sway</span></p>
          <p className='introtext'>Connect with your <span className='part'> family and friends </span></p>
        </div>
          <div style={{flex:3}}>
            <p className='createaccounttxt'>Login Account</p>
            <input type='email' name='' id='' placeholder='Email' className='inputText'/>
            <input type='password' name='' id='' placeholder='******' className='inputText'/>
            <button className='btnforsignup'>Login</button>
            <Link to={"/"}>
            <p style={{textAlign:"start" , marginLeft:"30.6%"}}>Forgot Password</p>
            </Link>
            <Link to={"/"}>
            <p style={{textAlign:"start" , marginLeft:"30.6%"}}>Create New Account</p>
            </Link>
          </div>
      </div>
      
    </div>
  )
}
