import React, { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import './layout/index.style'
import { HeaderPadding } from './layout/index.style'
import Footer from './layout/Footer'
import Header from './layout/Header'
const App: React.FC = () => (
  <Fragment>
    <Header/>
    <HeaderPadding></HeaderPadding>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
  </Fragment>
)

export default App
