
import './App.css'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom';
import { AuthProvider } from './auth';
import { RequireAuth } from './requireAuth';

function App() {

  return (
    <AuthProvider>
      <>
        <h2>Auth APP</h2>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='login' element={<Login />}/>
          <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>}/>
        </Routes>
        
      </>
    </AuthProvider>
  )
}

export default App
