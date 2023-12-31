import './Navbar.css'
import React from 'react'
import {Link} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {
  const {logout}=useLogout();
  const {user}=useAuthContext();
  return (
    <nav className="navbar">
        <ul>
            <li className='title'><Link to='/'>myMoney</Link></li>


          { !user && (
            <> 
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/Signup'>Signup</Link></li>  </>)}


          {user && (
            <>
            <li >hello,{user.displayName}   </li>
            <li>
            <button className="btn" onClick={logout}>Logout</button>
            </li></>)}

            
        </ul>
    </nav>

  )
}
