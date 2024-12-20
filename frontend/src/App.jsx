// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Dashboard from './Pages/Dashboard';
import Projects from './Pages/Projects';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Header from './Components/Header';
import FooterComponent from './Components/FooterComponent';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route element={<PrivateRoute/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Route>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    <FooterComponent/>
    </BrowserRouter>
  )
}

export default App;