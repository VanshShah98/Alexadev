import { response } from 'express';
import React, { useState } from 'react'

const Login = () => {
  const handleSubmit = async (e) => {
    const [credentials,setCredentials]=useState({email: "",password: ""})
    e.preventDefault();
    const response = await fetch("localhost:5000/api/auth/login", {
      methord : 'POST',
      headers: {
        'Content-Type': 'application/json'

      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    console.log(json);
  }
  const onChange =(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">Email address</label>
          <input type="email" className="form-control"value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange} id="password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )

}
export default Login
