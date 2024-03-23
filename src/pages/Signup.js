import React, { useState} from 'react'
import twitter from '../images/twitter.jpg'
import'./Signup.css'
import {Link} from "react-router-dom"
import Swal from 'sweetalert2'
import axios from 'axios'
import {API_BASE_URL} from '../../src/config'

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const signup = (event) =>{
        event.preventDefault();
        setLoading(true);
        const requestData = { name: name, email, userName, password }
        axios.post(`${API_BASE_URL}/signup`, requestData)
            .then((result) => {
                if (result.status === 201) {
                  setLoading(false);
                  Swal.fire({
                    icon: 'success',
                    title: 'User successfully registered'
                  })
                }
                setName('');
                setEmail('');
                setuserName('');
                setPassword('');

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
    <div className='container login-container'>
      <div className='row'>
        <div className='col-md-5 col-sm-12 image'>
          <img className='image' src={twitter} alt="" />
        </div>
        <div className='col-md-5 col-sm-6'>
          <div className="card shadow ms-2 mt-3" style={{height: '100%'}}>
            <div className="card-body">
            { loading ? <div className='col-md-12 text-center'>
          <div className='spinner-border text-primary ' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div> : ''}
              <h4 className="card-title mt-2 fw-bold">SignUp</h4>
              <form onSubmit={(ev)=>signup(ev)}>
              <div className='mb-3 mt-3'>
                  <input type="name" value={name}  name="name" onChange={(ev)=>setName(ev.target.value)} className='form-control' placeholder='Name' />
                </div>
                <div className='mb-3'>
                  <input type="email" value={email} name="email" onChange={(ev)=>setEmail(ev.target.value)} className='form-control' placeholder='Email' />
                </div>
                <div className='mb-3'>
                  <input type="username" value={userName} name="username" onChange={(ev)=>setuserName(ev.target.value)} className='form-control' placeholder='Username' />
                </div>
                <div className='mb-3'>
                  <input type="password" value={password} name="password" onChange={(ev)=>setPassword(ev.target.value)} className='form-control' placeholder='Password' />
                </div>
                <button type="Submit" className='btn btn-dark border-radius-3'>Signup</button>
                <div className='mt-3'>
                  <span>Already Signup?</span>
                  <Link to="/login" className='ms-1 text'>Login here</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;