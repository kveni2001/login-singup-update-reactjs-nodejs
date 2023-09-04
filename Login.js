import React, { useState } from 'react'
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios'


function Login() {
    const[ values,setValues] =useState({
        email:'', 
        password: ''
    })
    const navigate = useNavigate();

    const[errors, setErrors] = useState({})
    const handleInput =(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        const err=Validation(values);
        setErrors(Validation(values));
        if ( err.email===""&& err.password==="")
        {
            axios.post("http://localhost:8081/login", values)
            .then((res) => {
                if(res.data === "Success"){
                    navigate('/update');
                }
                else {
                    alert("No recode existed");
                }
            })
            .catch(err => console.log(err));
        }
    }
    
  return (

 
    
    <div className="container">
        <div className='uname'>
            
            <form action="" onSubmit={handleSubmit} className='form' >
            <h1>Login</h1>
                <div className='mb-3'>
                <label htmlFor ="email"><strong>  Email </strong></label>
                    <input type="email" placeholder='Enter email' name='email'
                    onChange={handleInput} className='form-control ' />
                    {errors.email && <span className='text-danger'  style={{ fontSize: '16px' }}>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor ="Password">Password</label>
                    <input type="password" placeholder='Enter password' name='password'
                    onChange={handleInput} className='form-control' />
                    {errors.password && <span className='text-danger' style={{ fontSize: '16px' }}>{errors.password}</span>}
                </div>
                <button type='submit' className='button' >  Login </button>
               
                <Link to='/signup' className='btn '> Create an Account </Link>
            </form>
        </div>
        
   
    </div>
    
  )
}

export default Login