import React,{ useState } from 'react';
import Input from './Input';


const Register = props => {
    
    const [formState, setFormState] = useState({
        FirstName:"",
        LastName:"",
        Email:"",
        Password:"",
        ConfirmPassword:"",
        validForm: false
    })
    const handleFormChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
        
    }
    
    const clearFormState = () => {
        setFormState({
            FirstName:"",
            LastName:"",
            Email:"",
            Password:"",
            ConfirmPassword:"",
            validForm: false
        })
    }
    const onSubmitForm = e => {
        e.preventDefault();
        alert(`You have submitted the information:\nFirst Name: ${formState.FirstName}\nLast Name: ${formState.LastName}\nEmail: ${formState.Email}\n${formState.Password === formState.ConfirmPassword ? "Passwords match":"Passwords do not match"}`);
        console.log(formState);
        clearFormState();
    }
    return(
        
        <form className="form" onSubmit={onSubmitForm}>
            <Input 
                name="FirstName"
                type="text"
                label="First Name:"
                message={formState.FirstName.length < 2 ? "First name must be at least 2 characters." : ''}
                value={formState.FirstName}
                onChange={handleFormChange}
            />
            <Input 
                name="LastName"
                type="text"
                label="Last Name:"
                message={formState.LastName.length < 2 ? "Last name must be at least 2 characters." : ''}
                value={formState.LastName}
                onChange={handleFormChange}
            />
            <Input 
                name="Email"
                type="email"
                label="Email Name:"
                message={formState.Email.length < 2 ? "Email must be at least 2 characters." : ''}
                value={formState.Email}
                onChange={handleFormChange}
            />
            <Input 
                name="Password"
                type="password"
                label="Password:"
                message={formState.Password.length < 8 ? "Password must be at least 2 characters." : ''}
                value={formState.Password}
                onChange={handleFormChange}
            />
            <Input 
                name="ConfirmPassword"
                type="password"
                label="Confirm Password:"
                message={formState.Password === formState.ConfirmPassword ? "" : "Passwords do not match"}
                value={formState.ConfirmPassword}
                onChange={handleFormChange}
            />
            <div className="form-group">
                {
                    formState.FirstName.length > 2 && formState.LastName.length > 2 && formState.Email.length > 2 && formState.Password >=8 && formState.Password === formState.ConfirmPassword ? <input className="btn btn-dark btn-outline-warning" type="submit" value="Register"  /> : <input className="btn btn-dark btn-outline-warning" type="submit" value="Register"  disabled/>
                }
                
            </div>
        </form>
    );
}

export default Register;