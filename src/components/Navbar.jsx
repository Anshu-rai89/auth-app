import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../auth';

function Navbar(props) {
    const {user} = useAuth();
    return (
        <div className='navbar'>
            <NavLink to='/'>Home</NavLink>
             { user === null ? 
                <NavLink to='/login'>Login</NavLink> :
                <NavLink to='/profile'>Profile</NavLink>
             }
        </div>
    );
}

export default Navbar;