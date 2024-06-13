import React from 'react'
import '../style/Signup.css'

const SignupPage = () => {
  return (
    <div className="content">
        <h3>Sign up</h3>
          <input className="l-input" type="name" name="Name" placeholder='Name' />
          <input className="l-input" type="phone" name="Phone" placeholder='Phone' />
          <input className="l-input" type="email" name="Email" placeholder='Email' />
          <input className="l-input" type="password" name="Password" placeholder='Password' />
          <br />
          <button className='submit'>Signup</button>
          <br />
        <p>Already have an account?<a href="/login"> Login </a></p>
      </div>
  )
}

export default SignupPage
