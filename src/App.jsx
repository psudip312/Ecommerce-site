
import './App.css'
import React from 'react'
import Header from './components/Header'
import Home from './modules/Home'
import Footer from './components/Footer/Footer'
import {Routes,Route} from 'react-router-dom'
import Product from './components/Header/Products/products'
import { useParams } from 'react-router-dom';

function App() {
  const { id } = useParams();

  return (
    <>
   <Header/>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product:id' element={<Product/>}/>
   </Routes>
   <p>Product ID: {id}</p>

   <Footer/>
    </>
  )
}

export default App
