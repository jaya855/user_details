import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { useState } from 'react';

function App() {

  const [login,setLogin]=useState(localStorage.getItem("userLogged"));
  return (
    <div className="App myApp">
      <MyNavbar login={login} setLogin={setLogin} />
    
      <Routes>
        {/* my routes */}
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login login={login} setLogin={setLogin} />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
