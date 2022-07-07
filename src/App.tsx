import React, { Fragment } from 'react'
import './App.css'
import Home from './Home'
import Footer from './layout/Footer'
import Header from './layout/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Company from './Company'
const App: React.FC = () => (
  <Fragment>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/company' element={<Company/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </Fragment>
)

export default App