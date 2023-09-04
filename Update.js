import React , {useState} from 'react'
import './style.css'; 
import { Link, useNavigate } from 'react-router-dom'
import Validation from './UpdateValidation';
import axios from 'axios'
function Update() {

    const[ values,setValues] =useState({
        age:'',
        gender:'',
        dob:'',
        mobile:''
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
        if ( err.mobile==="")
        {
            axios.post('http://localhost:8081/update', values)
            .then((res) => {
                alert("Successfully updated")
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    }

  return (
    <div className='container'>
    <div className='uname'>
    <form action="" onSubmit={handleSubmit} className='form'>
        <div>
        <h1> <strong>UPDATE FORM</strong> </h1>
        </div>
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
                
            </div>
        <div className='mb-3'>
        <label htmlFor="age">  Age:  </label>
        <input type="number" placeholder='Enter Your Age' name='age'
              onChange={handleInput}   className='form-control' />
        </div>
        <div className='mb-3'>
        <label htmlFor="gender">  Gender:  </label>
        <input type="text" placeholder='Enter Your gender' name='gender'
             onChange={handleInput}    className='form-control' />
            {errors.gender && <span className='text-danger'  style={{ fontSize: '16px' }}>{errors.gender}</span>}         
        </div>
        
        <div className='mb-3'>
        <label htmlFor="dob">  DOB:  </label>
        <input type="date" placeholder='Enter Your DOB' name='dob'
              onChange={handleInput}   className='form-control' />
              {errors.dob && <span className='text-danger'  style={{ fontSize: '16px' }}>{errors.dob}</span>}         
       
        </div>
        <div className='mb-3'>
        <label htmlFor="number"> Mobile no:  </label>
        <input type="number" placeholder='Enter Your Mobile num' name='mobile'
            onChange={handleInput}     className='form-control' />
             {errors.mobile && <span className='text-danger'  style={{ fontSize: '16px' }}>{errors.mobile}</span>}
        </div>
        
        <button type='submit' className='button'><Link to ='/' className='btn'> Update </Link></button>
        <Link to='/' className='btn'> Logout </Link>
      </form>
    </div>
    
    </div>
  );
}

export default Update;
