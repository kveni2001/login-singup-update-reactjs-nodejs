import React , {useState} from 'react'
import './style.css'; 
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation';
import axios from 'axios'
function Signup() {

    const[values,setValues] =useState({
        name:'',
        email:  '', 
        password: ''
       
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput =(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        const err=Validation(values);
        setErrors(Validation(values));
        if (err.name === ""&& err.email===""&& err.password==="")
        {
            axios.post('http://localhost:8081/signup', values)
            .then((res) => {
                
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    }
    
  return (
    <div className='container'>
    <div className='uname'>
         
        <form action="" onSubmit={handleSubmit} className='form'>
        <h1> Signup </h1>
            <div className='mb-3'>
                <label htmlFor="name">  Name </label>
                <input type="text" placeholder='Enter Your Name' name='name'
                onChange={handleInput} className='form-control' />
                 {errors.name && <span className='text-danger'  style={{ fontSize: '16px' }}>{errors.name}</span>}
          </div>
          <div className='mb-3'>
          <label htmlFor="email">  Email </label>
                <input type="email" placeholder='Enter email' name='email'
                onChange={handleInput} className='form-control ' />
                {errors.email && <span className='text-danger'  style={{ fontSize: '16px' }}>{errors.email}</span>}
            </div>
          
            <div className='mb-3'>
            <label htmlFor="password">  Password </label>
                <input type="password" placeholder='Enter password' name='password' 
                onChange={handleInput}  className='form-control ' />
                 {errors.password && <span className='text-danger'  style={{ fontSize: '16px' }}>{errors.password}</span>}
            </div>
         
            <button type='submit' className='button'><Link to='/signup' className='btn '> SignUp </Link> </button>
            
            <Link to='/' className='btn'> Login </Link>
        </form>
    </div>
    

</div>

  )
}

export default Signup