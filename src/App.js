import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="row justify-content-center mt-5">
        <div className="col-10 col-sm-5 col-md-3 mx-4">
          <h2>Register </h2>
          <Register
            
          />
        </div>
        <div className="col-10 col-sm-5 col-md-3 mx-3">
          <h2>Login</h2> 
          <Login />
        </div>
      </header>
    </div>
  );
}

export default App;
