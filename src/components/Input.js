import React from 'react';

const Input = ({type, name, onChange, label, value, message}) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input className="form-control" name={name} onChange={onChange} type={type} value={value} />
            <p>{message}</p>
        </div>
    );
}

export default Input;