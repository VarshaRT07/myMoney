import './Signup.css'
import React from 'react'
import {useState} from 'react'
import {useSignup} from '../../hooks/useSignup'

export default function Signup() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [displayName,setName]=useState('');
    const {signup,isPending,error}=useSignup()

    const handleClick=(e)=>{
        e.preventDefault();
        signup(email,password,displayName);


    }
  return (
    <form className='login-form' >
        <h2>Signup</h2>
        <label >
            <span>email:</span>
            <input type="email" 
            onChange={(e)=>setEmail(e.target.value)} value={email}/>
        </label>
        <label >
            <span>password:</span>
            <input type="password"
            onChange={(e)=>setPassword(e.target.value)} value={password}/>
        </label>
        <label >
            <span>display name:</span>
            <input type="text"
            onChange={(e)=>setName(e.target.value)} value={displayName}/>
        </label>
        {!isPending && <button className='btn' onClick={handleClick}> Signup</button>}
        {isPending && <p>Loading</p>}
        {error && <p>{error}</p>}
        

    </form>
  )
}
