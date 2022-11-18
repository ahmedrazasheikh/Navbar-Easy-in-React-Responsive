import React from 'react'
import {  BrowserRouter, Routes, Route,  } from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
import Navbar from './navbar';
import About from './Pages/About';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Contact"} element={<Contact />} />
          <Route path={"/Menu"} element={<Menu />} />
          <Route path={"/About"} element={<About />} />
        </Routes>
      </BrowserRouter>,
    </div>
  )
}

export default App
