
import './App.css'
import React from 'react'
import Header from './components/Header'
import Home from './modules/Home'
import Footer from './components/Footer/Footer'
import {Routes,Route} from 'react-router-dom'
import Product from './components/Product/product'
import { useParams } from 'react-router-dom';

function App() {

  return (
    <>
   <Header/>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<Product/>}/>
   </Routes>
   <Footer/>
    </>
  )
}

export default App
