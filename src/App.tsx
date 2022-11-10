import React, { Fragment } from 'react'
import './App.css'
import Home from './Home'
import Footer from './layout/Footer'
import Header from './layout/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Company from './Company'
import Brand from './Brand'
import Ceo from './Ceo'
import Marketing from './Marketing'
import Contents from './Contents'
import Digital_Platform from './Digital_Platform'
import Consulting from './Consulting'
import Work from './Work'
import News from './News'
const App: React.FC = () => (
  <Fragment>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/company' element={<Company/>}/>
        <Route path='/brand' element={<Brand/>}/>
        <Route path='/ceo' element={<Ceo/>}/>
        <Route path='/marketing' element={<Marketing/>}/>
        <Route path='/contents' element={<Contents/>}/>
        <Route path='/digital_platform' element={<Digital_Platform/>}/>
        <Route path='/consulting' element={<Consulting/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/news' element={<News/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </Fragment>
)

export default App