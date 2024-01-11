import React from 'react'
import { NavLink } from 'react-router-dom'
import imgSrc from '../images/pics'


function LoginPage(props) {
  return (
    <div className='container'>
        <div className="wrapper">
            <span className="logo">React-Chat-App</span>
        </div>
        <div className="form-wrapper">
            
            <div className='right'>
                <div className="title">
                    Login Here
                </div>
                <form autoComplete="off">
                    
                    <div className="form-item">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className='form-input' required placeholder='Enter Email Here' />
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className='form-input' required placeholder='Enter Passwrd Here' />
                    </div>
                    <div className="form-item">
                        <input type="submit" value="Login" className='btn btn-green'/>
                    </div>
                </form>
                <div className="block">
                   <NavLink to={`/register`} className="btn-link">
                        New user...Register Here
                   </NavLink>
                </div>
            </div>
            <div className="left">
                <img src={imgSrc.loginImage} alt="no image" />
            </div>
        </div>
    </div>
  )
}

export default LoginPage
