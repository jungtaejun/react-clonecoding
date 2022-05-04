import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import './index.style'
import { HomeHeader } from './index.style';
import Header from './layout/Header'
const App: React.FC = () => (
  <>
    <HomeHeader>
      <Header />
    </HomeHeader>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  </>
)

export default App;
