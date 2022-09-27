import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (e) =>{
    e.preventDefault()
    console.log(e.email)
    console.log(e.password)
  } 

  const register = (e) =>{
    e.preventDefault();
    console.log('Create account clicked!!')
  }
  return (
    <div className='login'>
      <Link to='/'>
        <img 
          className='login_logo'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
          alt="" 
        />
      </Link>

      <div className="login_container">
        <h1>Sign In</h1>
        <form action="">
          <h5>Email</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
          <button 
            className='login_signInButton'
            type='submit' 
            onClick={signIn}
            >
              Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon Clone's Conditions of Use and Privacy Notice. 
        </p>

        <button 
          className='login_registerButton'
          onClick={register}
          >
            Create your Amazon Account
        </button>
      </div>
    </div>
  )
}

export default Login