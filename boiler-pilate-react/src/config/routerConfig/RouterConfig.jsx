import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../screens/login/Login'
import Home from '../../screens/home/home/Home'

const RouterConfig = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Login/>} />
        <Route path='home' element= {<Home/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouterConfig
