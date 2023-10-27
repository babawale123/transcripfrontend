import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLoginAction } from '../actions/UserAction';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userLogin = useSelector((state)=>state.userLogin)
    const {loading,userInfo,error} = userLogin

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(userLoginAction(email,password))

    
      
    }

    useEffect(() => {
      if(!userInfo){
        navigate('/')
    }
    else {
      navigate('/home')
    }
   }, [userInfo,navigate])
   
    
  return (
    <>
    <div className='row mt-5 pt-5'>
        <div className='col-md'></div>
        <div className='col-md'>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}> {loading && <Spinner />}</div>
        {error && <div className='alert alert-danger'>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label for="email">Email address:</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter email" id="email" />
                </div>
                <div className="form-group">
                <label for="pwd">Password:</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)}  type="password" className="form-control" placeholder="Enter password" id="pwd" />
                </div>
                <div className="form-group form-check">
                <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" /> Remember me
                </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        <div className='col-md'></div>
    </div>
   
    </>
  )
}

export default Login