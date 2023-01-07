import React from 'react'
import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import HeadTail from './components/headtail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

    return (
        <>
        <BrowserRouter>
            <Header/>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path='/about' element={<About />} />
            <Route path='/headtail' element={<HeadTail />} />
          </Routes>
      </BrowserRouter> 
      </>
    )
}

export default App