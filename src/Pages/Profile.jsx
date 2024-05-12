import React from 'react';
import { useAuth } from '../auth';
import { useNavigate } from 'react-router-dom';

function Profile(props) {
    const {user, logout} = useAuth();
    const navigate = useNavigate();
    const handleLogoutOnClick = ()=> {
        logout();
        navigate("/");
    }
    return (
        <div>
            <h3>User Profile</h3>
             <div><span>Name : </span> <span>{user?.name}</span></div>
             <div><span>Email : </span> <span>{user?.email}</span></div>
            <div><button onClick={handleLogoutOnClick}>Logout</button></div>
        </div>
    );
}

export default Profile;