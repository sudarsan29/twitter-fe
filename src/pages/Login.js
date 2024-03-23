import React, { useState } from 'react'
import './Login.css'
import twitterimage from '../images/twitter.jpg'
import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import axios from 'axios'
import { API_BASE_URL } from '../../src/config'
import { useDispatch } from 'react-redux'

const Login = () => {

  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();

    setLoading(true);
    const requestData = { userName: userName, password }
    axios.post(`${API_BASE_URL}/login`, requestData)
      .then((result) => {
        if (result.status === 200) {
          setLoading(false);
          localStorage.setItem("token", result.data.result.token);
          localStorage.setItem('user', JSON.stringify(result.data.result.user));
          dispatch({ type: 'LOGIN_SUCCESS', payload: result.data.result.user});
          setLoading(false);
          navigate('/home');
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Some error occured please try again later'
        })
      })
  }
  return (
    <>
      <div className='container login-container'>
        <div className='row'>
          <div className='col-md-5 col-sm-12 image'>
            <img className='image' src={twitterimage} alt="logo" />
          </div>
          <div className='col-md-5 col-sm-6'>
            <div className="card shadow mt-3 ms-2" style={{ height: '380px' }} >
              <div className="card-body">
                {loading ? <div className='col-md-12 text-center'>
                  <div className='spinner-border text-primary ' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                  </div>
                </div> : ''}
                <h4 className="card-title mt-5 fw-bold">Log In</h4>
                <form onSubmit={(ev)=>login(ev)}>
                  <div className='mb-3 mt-3'>
                    <input type="username" value={userName} onChange={(ev)=>setuserName(ev.target.value)} className='form-control' placeholder='Username' />
                  </div>
                  <div className='mb-3'>
                    <input type="password" value={password} onChange={(ev)=>setPassword(ev.target.value)} className='form-control' placeholder='Password' />
                  </div>
                  <button type="submit" className='btn btn-dark border-radius-3'>Login</button>
                  <div className='mt-3'>
                    <span>Don't have an Account?</span>
                    <Link to="/signup" className='ms-1 text'>Signup here</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}

export default Login;