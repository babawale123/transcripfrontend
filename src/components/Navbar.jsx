import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { userLogout } from '../actions/UserAction';


const Navbar = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state)=>state.userLogin)
  const {userInfo} = userLogin

  useEffect(()=>{},[userInfo])

  const handleLogout = () => {
    dispatch(userLogout())
  }
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    
    <a className="navbar-brand" href="#">Transcript system</a>
  
    
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#">Contact us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Profile</a>
      </li>
  
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
          
        </a>
        <div className="dropdown-menu">
        <a className="dropdown-item" href="#">{userInfo.name}</a>
        <Link className="dropdown-item" to='/' onClick={handleLogout}>Log out</Link>
          
        </div>
      </li>
    </ul>
  </nav>
  
  )
}

export default Navbar