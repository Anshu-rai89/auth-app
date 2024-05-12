import React from 'react';
import { useAuth } from '../auth';

function Home(props) {
    const {user} = useAuth();
    return (
        <div>
            {
                user === null ? `Welcome to Auth APP Using react Home Page`: `Welcome ${user.name} To Home page`
            }
        </div>
    );
}

export default Home;