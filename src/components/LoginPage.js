import React from 'react'

const LoginPage = () => {
  return (
    <div className="content">
        <h1>Login</h1>
          <input className="l-input" type="email" name="Email" placeholder='Enter Email' />
          <input className="l-input" type="password" name="Password" placeholder='Enter Password' />
          <br />
          <button className='submit'>Login</button>
          <br />
          <p> Don't have an account <a href="/signup">SignUp</a>
          </p>
      </div>
  )
}

export default LoginPage
