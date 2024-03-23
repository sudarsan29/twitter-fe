import React from 'react';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Profile from './pages/Profile.js';

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Signup />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App;
