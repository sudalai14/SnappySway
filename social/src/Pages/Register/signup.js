import React from 'react'
import "./signup.css"
import { Link } from 'react-router-dom'
export default function signup() {
  return (
    <div className='mainContainerForsignup'>
      <div className='submainContainer'>
        <div style={{flex:1, marginLeft:150, marginBottom:"170px"}}>
          <p className='logoText'>Soc<span className='part'>ial</span></p>
          <p className='introtext'>Connect with your <span className='part'> family and friends </span></p>
        </div>
          <div style={{flex:3}}>
            <p className='createaccounttxt'>Create New Account</p>
            <input type='text' placeholder='Username' className='inputText'/>
            <input type='text' placeholder='PhoneNumber' className='inputText'/>
            <input type='email' name='' id='' placeholder='Email' className='inputText'/>
            <input type='password' name='' id='' placeholder='******' className='inputText'/>
            <button className='btnforsignup'>SignUp</button>
            <Link to={"/"}>
            <p style={{textAlign:"start" , marginLeft:"30.6%"}}>Already have an Account</p>
            </Link>
          </div>
      </div>
      
    </div>
  )
}
