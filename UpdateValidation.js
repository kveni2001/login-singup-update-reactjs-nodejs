function Validation (values)
{
    let errors = {}
    const mobile_pattern = /^\d{10}$/
    
    if(values.name === ""){
        errors.name = "Name should not be empty"
    }
    
    
    else{
        errors.name =""
    }
    if(values.gender === ""){
        errors.gender = "Gender should not be empty"
    }
    
    
    else{
        errors.gender =""
    }
    if(values.dob === ""){
        errors.dob = "Gender should not be empty"
    }
    
    
    else{
        errors.dob =""
    }

    if(values.mobile === ""){
        errors.mobile = "Mobile should not be empty"
    }
    else if (!mobile_pattern.test(values.mobile)){
        errors.mobile ="Mobile no Didn't match"
        
    }
    else{
        errors.mobile =""
    }
    
    return errors;
}

export default Validation;