import React, { useState } from 'react';
import { useAuth } from '../auth';
import { Navigate, useNavigate } from 'react-router-dom';

function Login(props) {
    const [email, setEmail] = useState("");
     const [name, setName] = useState("");
     const [password, setPassword] = useState("");
     const {login, user } = useAuth();
     const navigate = useNavigate();

     const handleLoginOnClick = ()=> {
        login({email, password, name});
        navigate("/");
     }

     if(user !== null) {
        return <Navigate to="/" />
     }

    return (
        <div className='login-container'>
            <h3>Login</h3>
            <div className='login-inputs'> 
                <label htmlFor=""> Full Name </label>
                <input value={name} onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div className='login-inputs'> 
                <label htmlFor=""> Email </label>
                <input value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
             <div className='login-inputs'> 
                <label htmlFor=""> Password </label>
                <input value={password} onChange={(e)=> setPassword(e.target.value)}/>
             </div>
              <div className='login-inputs'>
                <button onClick={handleLoginOnClick}> Login</button>
            </div>
        </div>
    );
}

export default Login;