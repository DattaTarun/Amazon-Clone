import React, { useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase'


function Login() {
    const navigate = useNavigate();
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const signIn=e=>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth)=>navigate('/'))
            .catch(error=>alert(error.message))
    }
    const register=e=>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                if(auth){
                    navigate('/')
                }
            })
            .catch(error=>alert(error.message)) 
    }
  return (
    <div className='login'>
        <Link to='/'>
        <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' />
        </Link>
        <div className='login_container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e=>setemail(e.target.value)}></input>
                <h5>Password</h5>
                <input type='password' value={password} onChange={e=>setpassword(e.target.value)}></input>
                <button className='login_signinbutton' onClick={signIn} type='submit'>Sign-in</button>
            </form>
            <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>
            <button className='login_registerbutton' onClick={register}>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login
