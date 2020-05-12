import React,{ useState } from 'react';
import Input from './Input';

const Login = props => {
    const [formState,setFormState] = useState({
        Email:"",
        Password:""
    })
    
    const handleFormChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    const clearFormState = () => {
        setFormState({
            Email:"",
            Password:""
        })
    }

    
    const onSubmitForm = e => {
        e.preventDefault();
        alert(`You have submitted the information:\nFirst Name: ${formState.Email}\nLast Name: ${formState.Password}`);
        console.log(formState);
        clearFormState();
        
    }
    return(
        <form className="form" onSubmit={onSubmitForm}>
            <Input 
                name="Email"
                type="email"
                label="Email Name:"
                value={formState.Email}
                onChange={handleFormChange}
            />
            <Input 
                name="Password"
                type="password"
                label="Password:"
                value={formState.Password}
                onChange={handleFormChange}
            />
            <div className="form-group">
                <input className="btn btn-dark btn-outline-warning" type="submit" value="Login" />
            </div>
        </form>
    );
}
export default Login;